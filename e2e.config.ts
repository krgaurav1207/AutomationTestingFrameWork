import { PlaywrightTestConfig } from "@playwright/test";    

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: "./tests",
    use: {
        headless: false,
        launchOptions: {
          args: ['--start-maximized'],
        },
        viewport: null,
        ignoreHTTPSErrors: true,
        actionTimeout: 15000,
        video: 'off',
        screenshot: 'off'

    },
    projects: [
        {   
            name: "chromium",
            use: { browserName: "chromium" },
        },
        {
            name: "firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "webkit",
            use: { browserName: "webkit" },
        },
    ]

}
export default config