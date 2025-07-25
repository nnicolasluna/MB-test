import { test, expect } from '@playwright/test';

test('DeshabilitarUsuarios', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  /* await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: '12' }).click();
  await page.getByRole('row', { name: 'pc123 pc123 pc123 piiuty1upa@' }).getByRole('button').nth(2).click();
  //Ayudar al boton de deshabilitar
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.getByRole('tab', { name: ' Usuarios Deshabilitados' }).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('tab', { name: ' Usuarios por Revisar' }).click();
  await page.getByRole('button', { name: '' }).nth(3).click();
  await page.getByRole('tab', { name: ' Usuarios Aprobados' }).click(); */
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});