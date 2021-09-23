const config = require('../src/utils/config')
jest.mock("../src/utils/config", () => {
    const originalConfig = jest.requireActual("../src/utils/config");
    const testConfig = originalConfig.getConfig();
    testConfig.DB.MYSQL.database = "todoapp";
    return {
        getConfig: () => testConfig
    };
});