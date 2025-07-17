import { test, expect } from '@playwright/test';

test('Nuevareunion2_fallida', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Miembros y Comite' }).click();
  await page.getByRole('link', { name: ' Grupos de Trabajo' }).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: ' Crear Reunion' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('reunion prueba');
  await page.locator('div').filter({ hasText: /^Fecha de la reunión:\* Campo es requerido$/ }).getByLabel('Elegir fecha').click();
  await page.getByText('16').click();
  await page.locator('div').filter({ hasText: /^Fecha de la siguiente reunión:\* Campo es requerido$/ }).getByLabel('Elegir fecha').click();
  await page.getByText('24').click();
  await page.getByRole('dialog', { name: 'Crear Reunión' }).getByLabel('dropdown trigger').click();
  await page.getByText('Virtual').click();
  await page.getByRole('dialog', { name: 'Crear Reunión' }).getByLabel('dropdown trigger').click();
  await page.getByRole('option', { name: 'Presencial' }).click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});