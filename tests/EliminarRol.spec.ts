import { test, expect } from '@playwright/test';

test('EliminarRol', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Roles' }).click();
  await page.getByRole('row', { name: 'Errores eroror    ' }).getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});