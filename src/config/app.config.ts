interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: [],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Organization',
  applicationName: 'Reach',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
