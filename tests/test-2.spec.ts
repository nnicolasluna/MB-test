import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');

  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('button', { name: ' Agregar Usuario' }).click();
  await page.getByRole('button', { name: ' Agregar Usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombres' }).fill('asdasdasd');
});