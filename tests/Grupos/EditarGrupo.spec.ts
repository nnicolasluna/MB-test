import { test, expect } from '@playwright/test';

test('EdicionGrupo', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Miembros y Comite' }).click();
  await page.getByRole('link', { name: ' Grupos de Trabajo' }).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('Grupo Prueba 2 editado');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});