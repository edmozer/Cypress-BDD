const { Before } = require('cypress-cucumber-preprocessor').default;
import register_seu_barriga_page from "../pages/register_seu_barriga_page";

Before(() => {
  register_seu_barriga_page.resetFields();
});