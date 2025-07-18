import { test, expect } from '@playwright/test';

test('Caso: Verificacion de roles repetidos al crear un nuevo rol', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Roles' }).click();
  await page.getByRole('button', { name: ' Agregar Rol' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Programador');
  await page.getByText('* Ya existe un registro con').click();
});