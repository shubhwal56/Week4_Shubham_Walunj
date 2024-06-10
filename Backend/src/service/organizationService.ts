import { Organization } from '../models/organizationModel';

const createOrganization = async (data: any) => {
  return await Organization.create(data);
};

const getOrganizations = async () => {
  return await Organization.findAll();
};

const updateOrganization = async (data: any) => {
  const { id, ...organizationData } = data;
  await Organization.update(organizationData, { where: { id } });
  return 'Organization updated successfully';
};

const deleteOrganization = async (id: string) => {
  await Organization.destroy({ where: { id } });
  return 'Organization deleted successfully';
};

export { createOrganization, getOrganizations, updateOrganization, deleteOrganization };
