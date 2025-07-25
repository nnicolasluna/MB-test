import { test, expect } from '@playwright/test';

test('CrearDocumentoscomoeditarlos', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Repositorio de Información y' }).click();
  await page.getByRole('link', { name: ' Documentos por Grupo de' }).click();
  await page.locator('.p-ripple.p-button.p-component.p-button-icon-only').first().click();
  await page.getByRole('button', { name: ' Agregar' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('PruebaCreacion y Edicion');
  await page.getByRole('textbox', { name: 'Descripcion:' }).click();
  await page.getByRole('textbox', { name: 'Descripcion:' }).fill('edita y crea');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('.layout-main').click();
  await page.locator('body').press('Tab');
  await page.getByRole('link', { name: '', exact: true }).press('Tab');
  await page.getByRole('listitem').filter({ hasText: /^Repositorio de Información y Documentos$/ }).locator('a').press('Tab');
  await page.getByRole('link', { name: 'Documentos por Grupo de Trabajo', exact: true }).press('Tab');
  await page.locator('a').filter({ hasText: 'Grupo Prueba doce' }).press('Tab');
  await page.getByRole('button', { name: ' Agregar' }).press('Tab');
  await page.getByRole('button', { name: ' Actualizar' }).press('Tab');
  await page.getByRole('columnheader', { name: 'Grupo' }).press('Tab');
  //await page.getByRole('button', { name: '' }).press('Tab');
  //await page.getByRole('button', { name: '' }).press('Enter');
  //await page.getByRole('button', { name: '' }).press('Enter');
 /*  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('PruebaCreacion y Edicion de las edciones');
  await page.getByRole('button', { name: ' Guardar' }).click(); */
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});