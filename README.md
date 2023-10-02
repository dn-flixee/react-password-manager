# React Password Manager

This is your first project on ReactJS, a password manager web application that allows users to store their passwords securely using AES encryption. The application includes a login page, and once logged in, users can access and manage their stored passwords.

## Overview

- **Login Page**: Users can log in using their credentials.

- **Password Storage**: After logging in, users can view, add, edit, and delete their stored passwords.

- **AES Encryption**: Passwords are stored securely using Advanced Encryption Standard (AES) encryption.

## Usage

To run this React Password Manager:

1. Clone the project repository.

2. Navigate to the project directory using your command line.

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure Firebase:
   - Create a Firebase project.
   - Obtain the necessary Firebase configuration keys (API Key, Auth Domain, Project ID, Storage Bucket, Messaging Sender ID, App ID, Measurement ID).
   - Create an `.env` file in the project root and add the Firebase configuration keys as shown below (replace placeholders with your actual keys):

     ```env
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     REACT_APP_MEASUREMENT_ID=your_measurement_id
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your web browser and go to `http://localhost:3000` to access the Password Manager.

## Security Note

Always keep your Firebase configuration keys (especially the API Key) secret and never commit them to version control.

## Contributing

Contributions to this project are welcome. If you have ideas for improvements or new features, please feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as long as you include the appropriate attribution.

---

Thank you for creating your first React project, the Password Manager! If you have any questions or need further assistance, please don't hesitate to reach out.
