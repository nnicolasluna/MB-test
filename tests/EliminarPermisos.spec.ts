import { test, expect } from '@playwright/test';

test('EliminarPermisos', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Permisos' }).click();
  await page.getByRole('row', { name: 'Programador Menú Usuarios' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});