import { test, expect } from '@playwright/test';

test('NuevoPermiso', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Permisos' }).click();
  await page.getByRole('button', { name: ' Agregar Permiso' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un rol' }).click();
  //await page.getByText('Diseño').click();
  //await page.getByRole('combobox', { name: 'Programador' }).click();
  await page.getByRole('option', { name: 'Programador' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un módulo' }).click();
  await page.getByRole('option', { name: 'Menú Usuarios' }).click();
  await page.getByRole('checkbox', { name: 'Administrador' }).check();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});