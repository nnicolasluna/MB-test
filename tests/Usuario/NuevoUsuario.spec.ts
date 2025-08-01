import { test, expect } from '@playwright/test';

test('NuevoUsuario', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Configuración de Usuarios' }).click();
  await page.getByRole('button', { name: ' Agregar Usuario' }).click();
  const timestamp = Date.now();
  const randomUsername = `testuser_${timestamp}`;
  const randomCI = `testci_${timestamp}`;
  const randomEmail = `test_${timestamp}@example.com`;
  await page.getByRole('textbox', { name: 'Nombres' }).fill('PruebaSabado');
  await page.getByRole('textbox', { name: 'Apellido Paterno' }).click();
  await page.getByRole('textbox', { name: 'Apellido Paterno' }).fill('PruebaSabado');
  await page.getByRole('textbox', { name: 'Apellido Materno' }).click();
  await page.getByRole('textbox', { name: 'Apellido Materno' }).fill('PruebaSabado');
  await page.getByRole('textbox', { name: 'Dirección' }).click();
  await page.getByRole('textbox', { name: 'Dirección' }).fill('calle PruebaSabado');
  await page.getByRole('textbox', { name: 'CI', exact: true }).click();
  await page.getByRole('textbox', { name: 'CI', exact: true }).fill(randomCI);
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).click();
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).click();
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(randomEmail);
  await page.getByRole('textbox', { name: 'Teléfono' }).click();
  await page.getByRole('textbox', { name: 'Teléfono' }).fill('51118451');
  await page.getByRole('dialog', { name: 'Agregar Usuario' }).getByLabel('dropdown trigger').click();
  await page.getByLabel('Administrador').getByText('Administrador').click();
  await page.getByRole('textbox', { name: 'Nombre de Usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombre de Usuario' }).fill(randomUsername);
  await page.getByRole('combobox', { name: 'Usuario válido hasta' }).click();
  await page.getByText('30').nth(1).click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('tab', { name: ' Usuarios por Revisar' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('tab', { name: ' Usuarios Aprobados' }).click();
}); 