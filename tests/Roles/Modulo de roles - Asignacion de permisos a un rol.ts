import { test, expect } from '@playwright/test';

test('Caso: Asignacion de permisos a un Rol', async ({ page }) => {
  await page.goto('https://mesabosques.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre Usuario / Correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Usuarios' }).click();
  await page.getByRole('link', { name: ' Administración de Permisos' }).click();
  await page.getByRole('button', { name: ' Agregar Permiso' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un rol' }).click();
  await page.getByRole('option', { name: 'Pasante' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un módulo' }).click();
  await page.getByRole('option', { name: 'Menú Usuarios' }).click();
  await page.getByLabel('Agregar Permisos').getByText('Administrador').click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('button', { name: ' Agregar Permiso' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un rol' }).click();
  await page.getByRole('option', { name: 'Pasante' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un módulo' }).click();
  await page.getByRole('option', { name: 'Usuarios' }).click();
  await page.getByRole('checkbox', { name: 'Administrador' }).check();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.getByRole('button', { name: ' Actualizar' }).click();
  await page.getByRole('cell', { name: 'Pasante' }).first().click();
  await page.getByRole('cell', { name: 'Usuarios', exact: true }).click();
  await page.getByRole('cell', { name: 'Super Admin' }).first().click();
  await page.getByRole('row', { name: 'Pasante Usuarios Super Admin' }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Visualizar Permiso$/ }).click();
  await page.getByText('Seleccionar RolPasante').click();
  await page.getByText('Seleccionar MóduloUsuarios').click();
  await page.getByText('Permisos Administrador Puede').click();
  await page.getByLabel('Visualizar Permiso').getByText('Administrador').click();
  await page.getByLabel('Visualizar Permiso').locator('div').filter({ hasText: 'Puede Ver' }).nth(3).click();
  await page.getByLabel('Visualizar Permiso').locator('div').filter({ hasText: 'Puede Crear' }).nth(3).click();
  await page.getByLabel('Visualizar Permiso').locator('div').filter({ hasText: 'Puede Actualizar' }).nth(3).click();
  await page.getByLabel('Visualizar Permiso').locator('div').filter({ hasText: 'Puede Eliminar' }).nth(3).click();
  await page.getByRole('button', { name: ' Cerrar' }).click();
});