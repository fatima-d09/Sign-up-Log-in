const testEnv = process.env.TEST_ENV ? process.env.TEST_ENV : 'staging';

const courseName = {
    production: 'Crooked Creek Demo',
    staging: 'Celebration Golf Club'
};

const bookingEngineURL = {
    production: 'https://crooked-creek-demo.book.teeitup.com',
    staging: 'https://celebration-golf-club.stage-phx-ui-be.svc.golf'
};

const ratesName = {
    production: 'FL Elite Card (DEV)',
    staging: 'FL Elite Card (DEV)'
};

const secondCourseName = {
    production: 'Crooked Creek Demo',
    staging: 'XYZ - Wingfield Smartplay (DEV)'
};

const secondBookingEngineURL = {
    production: 'https://crooked-creek-demo.book.teeitup.com',
    staging: 'https://xyz-wingfield-smartplay-dev.stage-phx-ui-be.svc.golf/'
};

const thirdCourseName = {
    production: 'Crooked Creek Demo',
    staging: 'Casselberry Golf Club'
};

const thirdBookingEngineURL = {
    production: 'https://crooked-creek-demo.book.teeitup.com',
    staging: 'https://casselberry-golf-club.stage-phx-ui-be.svc.golf/'
};

const mcoURL = {
    production: 'https://qa-automation-demo.book.teeitup.golf/',
    staging: 'https://primesilver-mco-automation-do-not-touch.stage-phx-ui-be.svc.golf/'
};

const groupURL = {
    production: 'https://qa-automation-demo-group.book.teeitup.golf/',
    staging: 'https://primesilver-group-automation-do-not-touch.stage-phx-ui-be.svc.golf/'
};

const mcoSearch = {
    production: 'Automation',
    staging: 'PrimeSilver'
};

const mco = {
    production: 'QA Automation Demo',
    staging: 'PrimeSilver MCO AUTOMATION-DO-NOT-TOUCH'
};

const group = {
    production: 'QA Automation Demo Group',
    staging: 'PrimeSilver GROUP AUTOMATION-DO-NOT-TOUCH'
};

const production = {
    username: process.env.MANAGE_USERNAME,
    password: process.env.MANAGE_PASSWORD,
    domain: 'https://manage.golfnowcentral.com/' //Login
};

const staging = {
    username: process.env.MANAGE_USERNAME,
    password: process.env.MANAGE_PASSWORD,
    domain: 'https://stage-manage.golfnowcentral.com/'
};

export const config = testEnv === 'production' ? production : staging;
export const environment = testEnv;
export const course = courseName[testEnv];
export const booking = bookingEngineURL[testEnv];
export const rateName = ratesName[testEnv];
export const bookingMCO = mcoURL[testEnv];
export const bookingGroup = groupURL[testEnv];
export const mcoSearchName = mcoSearch[testEnv];
export const mcoName = mco[testEnv];
export const groupName = group[testEnv];
export const secondCourse = secondCourseName[testEnv];
export const secondBooking = secondBookingEngineURL[testEnv];
export const thirdCourse = thirdCourseName[testEnv];
export const thirdBooking = thirdBookingEngineURL[testEnv];
