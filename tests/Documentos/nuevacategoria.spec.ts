import { test, expect } from '@playwright/test';

test('NuevaCategoria', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Repositorio de Información y' }).click();
  //await page.getByRole('link', { name: ' Documentos por Grupo de' }).click();
  //await page.locator('.p-ripple.p-button.p-component.p-button-icon-only').first().click();
  await page.getByRole('link', { name: ' Documentos Oficiales' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('button', { name: ' Crear SubCategoria' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).fill('prueba categorias');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('button', { name: ' Crear SubCategoria' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).fill('pruebas categorias 2');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('link', { name: ' Documentos por Grupo de' }).click();
  await page.locator('.p-ripple.p-button.p-component.p-button-icon-only').first().click();
  await page.getByRole('link', { name: ' Documentos Oficiales' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});