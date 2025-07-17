import { test, expect } from '@playwright/test';

test('NuevoGrupo', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Reuniones y Convocatorias' }).click();
  await page.getByRole('link', { name: ' Administración de Agenda' }).click();
  await page.locator('a').filter({ hasText: 'Miembros y Comite' }).click();
  await page.getByRole('link', { name: ' Grupos de Trabajo' }).click();
  await page.getByRole('button', { name: ' Crear Grupo' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).click();
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('Grupo Prueba doce');
  await page.getByRole('combobox', { name: 'Seleccionar Fecha' }).click();
  await page.getByText('20', { exact: true }).click();
  await page.getByText('Seleccione integrantes').click();
  await page.getByRole('checkbox', { name: 'Rodrigo Emilio' }).check();
  await page.getByRole('checkbox', { name: 'Cliente1' }).check();
  await page.getByRole('checkbox', { name: 'Documentador' }).check();
  await page.getByRole('combobox', { name: 'Seleccione tipo de grupo' }).click();
  await page.getByRole('option', { name: 'Sesiones de la MBC' }).click();
  await page.getByRole('combobox', { name: 'Seleccionar Fecha' }).click();
  await page.getByText('25', { exact: true }).click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});