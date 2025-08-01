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
  /* await page.locator('div').filter({ hasText: /^Fecha de la reunión:\* Campo es requerido$/ }).getByLabel('Elegir fecha').click();
  await page.getByText('16').click();
  await page.locator('div').filter({ hasText: /^Fecha de la siguiente reunión:\* Campo es requerido$/ }).getByLabel('Elegir fecha').click();
  await page.getByText('24').click(); */
  // Clic en el primer datepicker
await page.getByRole('button', { name: 'Elegir fecha' }).first().click();
await page.getByRole('gridcell', { name: '16' }).click();  // seleccionar el día

// Clic en el segundo datepicker
await page.getByRole('button', { name: 'Elegir fecha' }).nth(1).click();
await page.getByRole('gridcell', { name: '24' }).click();  // seleccionar el día

  await page.getByRole('dialog', { name: 'Crear Reunión' }).getByLabel('dropdown trigger').click();
  await page.getByLabel('Presencial').getByText('Presencial').click();
  await page.getByRole('textbox', { name: 'Dirección' }).click();
  await page.getByRole('textbox', { name: 'Dirección' }).fill('calle');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});