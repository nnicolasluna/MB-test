import { test, expect } from '@playwright/test';

test('Enviocorreo', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
 /*  await page.locator('.p-datatable-header').click({
    button: 'middle'
  });
  await page.getByRole('cell', { name: 'San Pedro' }).click({
    button: 'middle'
  }); */
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByText('Correo enviado correctamente').click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});