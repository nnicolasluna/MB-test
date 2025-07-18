import { test, expect } from '@playwright/test';

test('Deshabiliar_habilitar_usuario', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('row', { name: 'Pruebacuatro Pruebacuatro' }).getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.getByRole('tab', { name: ' Usuarios Deshabilitados' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('tab', { name: ' Usuarios por Revisar' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('tab', { name: ' Usuarios Aprobados' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});