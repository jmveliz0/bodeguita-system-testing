const { Builder } = require('selenium-webdriver');
const fs = require('fs')
const uuidv1 = require('uuid/v1');

const loginSuccess = require('./login-success')
const loginNotSuccess = require('./login-not-success')
const createProductSuccess = require('./create-product-success')
const createProductNotSuccess = require('./create-product-not-success');
const deleteProductSuccess = require('./delete-product-success');
const editProductNotSuccess = require('./edit-product-not-success');
const editProductSuccess = require('./edit-product-success');
const deleteProductNotSuccess = require('./delete-product-not-success');
const listProductNotSuccess = require('./list-product-not-success');
const listProductSuccess = require('./list-product-success');


(async function main() {
    let time = 150;
    let url = undefined

    let chrome_driver = await new Builder().forBrowser('chrome').build();
    
		try {
      await loginNotSuccess(chrome_driver,time,url);
			await loginSuccess(chrome_driver,time,url); 
      await createProductSuccess(chrome_driver,time,url);
      await createProductNotSuccess(chrome_driver,time,url);
      await listProductSuccess(chrome_driver,time,url);
      await listProductNotSuccess(chrome_driver,time,url);
      await editProductNotSuccess(chrome_driver,time,url);
      await editProductSuccess(chrome_driver,time,url);
      await deleteProductNotSuccess(chrome_driver,time,url);
      await deleteProductSuccess(chrome_driver,time,url);

		} catch (error) {
			let base64Image = await chrome_driver.takeScreenshot() // image in base64
			fs.writeFile(`./images-error/${uuidv1()}.png`, base64Image, {encoding: 'base64'}, function(err) {
				console.log('File created',err,' VF Error: ',error);
			});
		} finally {
			await chrome_driver.quit()
    }
    
    let firefox_driver = await new Builder().forBrowser('firefox').build();
    try {
      await loginNotSuccess(firefox_driver,time,url);
      await loginSuccess(firefox_driver,time,url);
      await createProductSuccess(firefox_driver,time,url);
      await createProductNotSuccess(firefox_driver,time,url);
      await listProductSuccess(firefox_driver,time,url);
      await listProductNotSuccess(firefox_driver,time,url);
      await editProductNotSuccess(firefox_driver,time,url);
      await editProductSuccess(firefox_driver,time,url);
      await deleteProductNotSuccess(firefox_driver,time,url);
      await deleteProductSuccess(firefox_driver,time,url);
		} catch (error) {
			let base64Image = await firefox_driver.takeScreenshot() // image in base64
			fs.writeFile(`./images-error/${uuidv1()}.png`, base64Image, {encoding: 'base64'}, function(err) {
				console.log('File created',err,' VF Error: ',error);
			});
		} finally {
			await firefox_driver.quit()
    }

    let safari_driver = await new Builder().forBrowser('safari').build();
    try {
      await loginNotSuccess(safari_driver,time,url);
      await loginSuccess(safari_driver,time,url); 
      await createProductSuccess(safari_driver,time,url);
      await createProductNotSuccess(safari_driver,time,url);
      await listProductSuccess(safari_driver,time,url); 
      await listProductNotSuccess(safari_driver,time,url);
      await editProductNotSuccess(safari_driver,time,url);
      await editProductSuccess(safari_driver,time,url);
      await deleteProductNotSuccess(safari_driver,time,url);
      await deleteProductSuccess(safari_driver,time,url);
		} catch (error) {
			let base64Image = await safari_driver.takeScreenshot() // image in base64
			fs.writeFile(`./images-error/${uuidv1()}.png`, base64Image, {encoding: 'base64'}, function(err) {
				console.log('File created',err,' VF Error: ',error);
			});
		} finally {
			await safari_driver.quit()
    }  

})();