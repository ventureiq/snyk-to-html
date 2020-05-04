export interface ActionableRemediation {
  upgradeFrom: string; // e.g. package@version
  upgradeTo: string; // e.g. package@version
  vulns: Vuln[];
  severityScore: number;
}

export interface ActionablePatch {
  id: string;
  paths: object[];
  issueData: {
    severity: number;
    title: string;
    name: string;
    version: string;
  };
}

export interface Vuln {
  id: string;
  title: string;
  severity: string;
}
