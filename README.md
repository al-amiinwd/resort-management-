Welcome to resort management, a hotel bookings system, built with Laravel backend, React and Tailwind CSS in the frontend.


**1 - Clone the project:**

    git clone https://github.com/yons101/hotel101-hotel-bookings-laravel-react.git
    cd hotel101-hotel-bookings-laravel-react

**2 - Install Laravel dependencies**

    cd backend
    composer install

**3 - Setup database and Stripe:**

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=db_name
    DB_USERNAME=db_username
    DB_PASSWORD=db_password

    STRIPE_KEY=
    STRIPE_SECRET=

**4 - Migrate, seed , setup oauth2:**
php artisan migrate --seed
php artisan passport:install

**5 - Serve Laravel Backend:**
php artisan serve
**6 - Install React dependencies:**

    cd ..
    cd frontend
    npm install

**7 - Set base url in .env file**

    REACT_APP_BASE_URL=http://127.0.0.1:8000

**8 - Serve React Frontend**

    npm start

**9 card number:5555555555554444
cvv number : any 3 number


**_Technologies and packages used:_**

Backend :

    Laravel, laravel/passport, guzzlehttp/guzzle

Frontend:

    React, TailwindCSS, react-redux, react-router-dom,
    react-slick, react-to-print, react-typical,
    react-image-lightbox, secure-ls,
    @yaireo/tagify, axios, google-maps-react, AOS


