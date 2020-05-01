import * as _ from '@snyk/lodash';
import { ActionablePatch, ActionableRemediation, Vuln } from './types';

export const severityMap = { low: 0, medium: 1, high: 2 };

function getVuln(id, vulnerabilities: any): Vuln {
  const vuln = vulnerabilities.find((v) => v.id === id);
  return {
    id: vuln.id,
    title: vuln.title,
    severity: vuln.severity,
  };
}

export function getSeverityScore(vulns: Vuln[]) {
  return vulns.reduce((acc, vuln) => acc + (severityMap[vuln.severity] + 1), 0);
}

export function getUpgrades(
  upgrade: any,
  vulnerabilities: any,
): ActionableRemediation[] {
  const result: ActionableRemediation[] = [];
  Object.keys(upgrade).forEach((key) => {
    const { upgradeTo, vulns: vulnIds } = upgrade[key];
    const vulns: Vuln[] = vulnIds.map((id) => getVuln(id, vulnerabilities));
    const actionableRemediation: ActionableRemediation = {
      upgradeFrom: key,
      upgradeTo,
      vulns,
      severityScore: getSeverityScore(vulns),
    };
    result.push(actionableRemediation);
  });
  const sortedResult = _.orderBy(result, 'severityScore', 'desc');
  return sortedResult;
}

// get patches: info to display:
// Patch <package @> ms@0.6.2
// <severity label>  <name> Regular Expression Denial of Service (ReDoS)
// export function getPatches(
//   patch: any,
//   vulnerabilities: any,
// ): ActionablePatch[] {
//   const result: ActionablePatch[] = [];
//   Object.keys(patch).forEach(key => {
//     vulnerabilities.map(v => v.id === key ? console.log(v) : '');
  // });
    // const { patchTo, vulns: vulnIds } = patch[key];
    // console.log(vulnIds);
    // const vulns: Vuln[] = vulnIds.map((id) => getVuln(id, vulnerabilities));
  //   const actionablePatch: ActionablePatch = {
  //     patchFrom: key,
  //     patchTo,
  //     vulns,
  //     severityScore: getSeverityScore(vulns),
  //   };
  //   result.push(actionablePatch)};
  // const sortedResult = _.orderBy(result, 'severityScore', 'desc');
//   return result;
// }

// copied from Registry
// if (remediation.patches.length > 0) {
//   addIssueDataToPatch(this.remediationData.patch, this.issues);

//   panes.push({
//     label: `Patchable issues (${counts.patches})`,
//     slot: "patch",
//     url: "patchableIssues",
//   });
// }

export function addIssueDataToPatch(remediation, vulnerabilities) {
  const patches: ActionablePatch[] = [];
  Object.entries(remediation).forEach(([pack, packData]) => {
    const vuln = vulnerabilities.find((v) => v.id === pack);
    const issueData = {
      severity: vuln.severity,
      title: vuln.title,
      name: vuln.packageName,
      version: vuln.version,
    };
    const asdf = Object.assign(packData, { issueData });
    patches.push(asdf.issueData);
  });
  return patches;
}


// function addIssueDataToUpgradeAndPin(remediation, issues, sortBy) {
//   Object.values(remediation).forEach((packData) => {
//     const issueData = packData.vulns
//       .map((singleVulnData) => {
//         const issue = issues.find((v) => v.id === singleVulnData);

//         return {
//           severity: issue ? issue.issueData.severity : "",
//           title: issue ? issue.issueData.title : "",
//         };
//       })
//       .sort(sortBy);

//     Object.assign(packData, { issueData });
//   });
// }

//     truncatedPatchableIssueItems() {
//       let items = {};

//       if (this.expandedPatchable) {
//         items = this.patchableIssueItems;
//       } else {
//         Object.entries(this.patchableIssueItems)
//           .slice(0, 3)
//           .forEach(([key, value]) => {
//             items[key] = value;
//           });
//       }

//       return Object.values(items).map((packageInfo) => {
//         return {
//           ...packageInfo,
//           cardTitle: `Patch <strong>${packageInfo.issueData.name}@${packageInfo.issueData.version}</strong>`,
//         };
//       });
//     },
//   },

//   methods: {
//     expandUpgradable() {
//       this.expandedUpgradable = true;
//     },
//     expandPatchable() {
//       this.expandedPatchable = true;
//     },
//     loadingSpinnerText() {
//       return 'Loading remediation advice...';
//     },
//   },
// };
//

// end copied from Registry

// export function getPinnable(
//   pin: any,
//   vulnerabilities: any
// ): ActionableRemediation[] {
//   const result: ActionableRemediation[] = [];
//   Object.keys(upgrade).forEach((key) => {
//     const { upgradeTo, vulns: vulnIds } = upgrade[key];
//     const vulns: Vuln[] = vulnIds.map((id) => getVuln(id, vulnerabilities));
//     const actionableRemediation: ActionableRemediation = {
//       upgradeFrom: key,
//       upgradeTo,
//       severityScore: getSeverityScore(vulns),
//       vulns,
//     };
//     result.push(actionableRemediation);
//   });
//   const sortedResult = _.orderBy(result, "severityScore", "desc");
//   return sortedResult;
// }