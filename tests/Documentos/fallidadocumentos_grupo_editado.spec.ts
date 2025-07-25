/* import { test, expect } from '@playwright/test';

test('Documentos_grupos_editadofallida', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Repositorio de Información y' }).click();
  await page.getByRole('link', { name: ' Documentos por Grupo de' }).click();
  await page.locator('.p-ripple.p-button.p-component.p-button-icon-only').first().click();
  await page.getByRole('row', { name: 'pruebas 4    ' }).getByRole('button').nth(2).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('pruebas 4 editada');
  await page.getByRole('textbox', { name: 'Descripcion:' }).click();
  await page.getByRole('textbox', { name: 'Descripcion:' }).fill('documento de pruebas tres edi');
  await page.getByRole('button', { name: ' Guardar' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'pruebas 4 editada    ' }).getByRole('button').nth(3).click();
  const download = await downloadPromise;
  await page.getByRole('row', { name: 'pruebas 3    ' }).getByRole('button').nth(1).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('pruebas 3 full editada');
  await page.getByRole('textbox', { name: 'Descripcion:' }).click();
  await page.getByRole('textbox', { name: 'Descripcion:' }).fill('documento de pruebas dos ediciones');
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('row', { name: 'pruebas dos    ' }).getByRole('button').nth(1).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('pruebas dos editada');
  await page.getByRole('textbox', { name: 'Descripcion:' }).click();
  await page.getByRole('textbox', { name: 'Descripcion:' }).fill('documento de pruebas dos super editada');
  await page.getByRole('button', { name: ' Guardar' }).click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'pruebas dos editada    ' }).getByRole('button').nth(3).click();
  const download1 = await download1Promise;
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
}); */