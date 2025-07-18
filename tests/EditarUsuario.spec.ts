import { test, expect } from '@playwright/test';

test('EditarUsuario', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('A');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('row', { name: 'foto del usuario Zoom Image Marcos Aquista Ocañamos Tomorrow gedifab563@' }).getByRole('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Nombres' }).click();
  await page.getByRole('textbox', { name: 'Nombres' }).fill('Pedro Aquista');
  await page.getByRole('textbox', { name: 'CI', exact: true }).click();
  await page.getByRole('textbox', { name: 'CI', exact: true }).fill('794945');
  await page.getByRole('textbox', { name: 'Teléfono' }).click();
  await page.getByRole('textbox', { name: 'Teléfono' }).fill('5141615');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});