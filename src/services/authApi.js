// googleOAuthAPI.js

// Define the base URL of your backend API
const BASE_URL = 'https://your-backend-api-url.com';

const googleOAuthAPI = {
    // Function to initiate Google OAuth authentication
    authenticate: async () => {
        try {
            // Open a new window or tab with the Google OAuth URL for user authentication
            const authWindow = window.open(`${BASE_URL}/auth/google/`, '_blank');

            // Check if the window object is available
            if (authWindow) {
                // Add an event listener to listen for messages from the authentication window
                window.addEventListener('message', (event) => {
                    // Check if the message is from the authentication window
                    if (event.source === authWindow) {
                        // Parse the message data
                        const data = JSON.parse(event.data);
                        
                        // Close the authentication window
                        authWindow.close();
                        
                        // Check if the authentication was successful
                        if (data.success) {
                            // Handle the successful authentication response
                            console.log(data); // Response data from successful authentication
                            // You can perform further actions here, such as updating the UI
                        } else {
                            // Handle authentication failure
                            console.error(data.message); // Error message from authentication endpoint
                        }
                    }
                });
            } else {
                throw new Error('Failed to open authentication window');
            }
        } catch (error) {
            // Handle any errors that occur during the authentication process
            throw new Error(`Failed to authenticate: ${error.message}`);
        }
    }
};

export default googleOAuthAPI;
