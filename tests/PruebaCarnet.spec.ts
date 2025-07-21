import { test, expect } from '@playwright/test';

test('PruebaCarnet', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('Enter');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('button', { name: ' Agregar Usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombres' }).click();
  await page.getByRole('textbox', { name: 'Nombres' }).fill('correo');
  await page.getByRole('textbox', { name: 'Nombres' }).press('Tab');
  await page.getByRole('textbox', { name: 'Apellido Paterno' }).fill('correo');
  await page.getByRole('textbox', { name: 'Apellido Paterno' }).press('Tab');
  await page.getByRole('textbox', { name: 'Apellido Materno' }).fill('correo');
  await page.getByRole('textbox', { name: 'Apellido Materno' }).press('Tab');
  await page.getByRole('textbox', { name: 'Dirección' }).fill('calle correo');
  await page.getByRole('textbox', { name: 'CI', exact: true }).click();
  await page.getByRole('textbox', { name: 'CI', exact: true }).fill('794945');
  await page.getByText('* Ya existe un registro con').click();
});