import { test, expect } from '@playwright/test';

test('EditarRol', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Roles' }).click();
  await page.getByRole('row', { name: 'Diseño El que diseña    ' }).getByRole('button').nth(1).click();
  await page.getByRole('textbox', { name: 'Nombre' }).click();
  //await page.getByRole('textbox', { name: 'Nombre' }).fill('dise');
  //await page.getByRole('textbox', { name: 'Nombre' }).press('Shift+Dead');
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Diseño Propio');
  await page.getByRole('textbox', { name: 'Nombre' }).click();
  await page.getByRole('textbox', { name: 'Descripción' }).fill('Diseño Programado');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});