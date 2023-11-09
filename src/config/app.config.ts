interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Book a tool for rental',
    'View available tools',
    'View outlet information',
  ],
  ownerAbilities: ['Manage company information', 'Manage user accounts', 'Manage tools', 'Manage outlets'],
  getQuoteUrl: 'https://app.roq.ai/proposal/480b83b3-fee8-410d-b608-b5778c07c315',
};
