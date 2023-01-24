# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

This project is launched on my site: [weatherapp.bevizuality.hu](https://www.weatherapp.bevizuality.hu/)

## Dependencies

This app uses the [API of weatherapi.com](https://rapidapi.com/weatherapi/api/weatherapi-com). If you want to use it locally you have to regeister first on [rapidapi.com](https://rapidapi.com/auth/sign-up?referral=/hub).
After you sign up you have to create a new app [here](https://rapidapi.com/developer/new).
Now, you can get the neccesery datas to use the API. On the [API's site](https://rapidapi.com/weatherapi/api/weatherapi-com) you can select your app. Now you can get your **X-RapidAPI-Key** and **X-RapidAPI-Host**.

## Install
1. Start your terminal
2. Navigate to the folder you want to install the application
3. Run in terminal: `git clone https://github.com/bevizzoli/Weather-App.git`
3. Run in terminal: `npm i`
5. Run in terminal: `ng g environments`
6. Paste the code below to your environment.ts and environment.development.ts files
```
export const environment = {
    API_Endpoint: 'https://weatherapi-com.p.rapidapi.com',
    XRapidAPIKeyName: 'X-RapidAPI-Key',
    XRapidAPIKeyValue: 'YOUR API KEY',
    XRapidAPIHostName: 'X-RapidAPI-Host',
    XRapidAPIHostValue: 'weatherapi-com.p.rapidapi.com',
};
```
7. Run in terminal: `ng s -o`
8. Enjoy app