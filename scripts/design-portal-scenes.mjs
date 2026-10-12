import { employeeScenes } from './design-portal-scenes-employee.mjs';
import { adminScenes } from './design-portal-scenes-admin.mjs';

export const portalScenes = { ...employeeScenes, ...adminScenes };
