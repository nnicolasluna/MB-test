import { test, expect } from '@playwright/test';

test('EditarActividad', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Repositorio de Información y' }).click();
  await page.getByRole('link', { name: ' Documentos Oficiales' }).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).click();
  await page.getByRole('textbox', { name: 'Titulo:' }).fill('Documento Prueba editado');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});