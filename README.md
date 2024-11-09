# Visage

**Visage** is a React Native application designed to provide personalized beauty recommendations, including foundation shades and product details. By integrating machine learning models and a Supabase backend, Visage analyzes user-uploaded images to offer tailored product suggestions, enhancing the beauty shopping experience with smart, data-driven insights.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [File Structure](#file-structure)


## Features

- **User Authentication**: Secure sign-up, login, and profile management.
- **Image Analysis**: Upload and analyze images for personalized beauty product recommendations.
- **Personalized Recommendations**: AI-powered product suggestions tailored to the user's unique skin tone.
- **Smooth Navigation**: Easy-to-use interface with seamless transitions and interactions.
- **Backend Integration**: Data storage, authentication, and image processing powered by Supabase.
- **Responsive Design**: Optimized for smartphones and tablets, ensuring a smooth experience across different screen sizes.

## Technology Stack

- **Frontend**: React Native, Expo
- **Backend**: Supabase (database, authentication)
- **Programming Language**: JavaScript
- **AI/ML Integration**: Stone image classification model for face analysis
- **Libraries**:
  - `@supabase/supabase-js` for Supabase integration
  - `@react-navigation/native` for navigation
  - `dotenv` for environment variable management

## Installation

Follow the steps below to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/visage.git
   cd visage
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   ```makefile
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-anon-key
   ```
4. **Run the App**:
   ```bash
   npx expo start --tunnel
   ```

## Overview of File Structure
    /visage
    ├── /assets         # Image assets, icons, etc.
    ├── /components     # Reusable components
    ├── /screens        # App screens (Login, Home, Profile, etc.)
    ├── /services       # API calls and logic (e.g., Supabase integration)
    ├── /styles         # Styles for different components
    ├── App.js          # Main entry point
    ├── .env            # Environment variables
    └── package.json    # Project metadata and dependencies
