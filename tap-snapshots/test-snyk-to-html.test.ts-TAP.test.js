/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/snyk-to-html.test.ts TAP test snyk-to-html handles -s argument correctly > should be expected snapshot containing summary template 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="49 known vulnerabilities found in 232 vulnerable dependency paths.">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">

    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }

    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }

    a:hover,
    a:focus,
    a:active {
      border-bottom: 2px solid #4b45a9;
    }

    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }

    ul {
      padding: 0 1em;
      margin: 1em 0;
    }

    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }

    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }

    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }

    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }

    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }


  /* Layout */

    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
    }

    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }

  /* Header */

    .header {
      padding-bottom: 1px;
    }

    .project__header {
      background-color: #4C4A73;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }

    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
      float: left;
    }

    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }

    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }

    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }

    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }

  /* Card */

    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }

    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }

    .card .label__text {
      vertical-align: text-top;
    }

    .card .label--high {
      background-color: #B51B72;
      border-color: #B51B72;
    }

    .card .label--medium {
      background-color: #E29022;
      border-color: #E29022;
    }

    .card .label--low {
      background-color: #222049;
      border-color: #222049;
    }

    .card .card.severity--low {
      border-color: #222049;
    }

    .card .card.severity--medium {
      border-color: #E29022;
    }

    .card .card.severity--high {
      border-color: #B51B72;
    }

    .card--vuln {
      padding-top: 4em;
    }

    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }

    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }

    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }

    .card .card__meta__paths {
      font-size: 0.9em;
    }

    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }

    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }

    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
      padding: 0.5em;
    }



  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      width: 100%;
    }

    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }

    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px 0 0;
      width: 30%;
      margin-right: 5%;
    }

    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }

    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">

    <div class="layout-stacked__header header">
      <header class="project__header">
        <div class="layout-container--short">
            <h1 class="project__header__title">Snyk test summary</h1>

          <p class="timestamp">TIMESTAMP</p>
          <div class="source-panel">
            <span>Scanned the following path:</span>
            <ul>
              <li>/path/to/goof (npm)</li>
            </ul>
          </div>

          <div class="meta-counts">
            <div class="meta-count"><span>49</span> <span>known vulnerabilities</span></div>
            <div class="meta-count"><span>232 vulnerable dependency paths</span></div>
            <div class="meta-count"><span>474</span> <span>dependencies</span></div>
          </div><!-- .meta-counts -->
        </div><!-- .layout-container--short -->
      </header><!-- .project__header -->
    </div><!-- .layout-stacked__header -->

    <section class="layout-container">
    <table class="metatable">
        <tbody>
        <tr class="meta-row"><th class="meta-row-label">Vulnerabilities</th> <td class="meta-row-value">49</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Dependencies</th> <td class="meta-row-value">474</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Created on</th> <td class="meta-row-value"><p class="timestamp">TIMESTAMP</p></td></tr>
        <tr class="meta-row"><th class="meta-row-label">Branch</th> <td class="meta-row-value">/path/to/goof</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Tested with</th> <td class="meta-row-value">npm</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">package-lock.json</td></tr>
        </tbody>
    </table><!-- .meta-counts -->
    </section><!-- .layout-container-->

    <div class="layout-stacked__content">
      <div class="layout-container--short" style="padding-top: 35px;">
        <div class="cards--vuln filter--patch filter--ignore">
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              set-value
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>set-value</code> to version 2.0.1, 3.0.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/jonschlinkert/set-value/commit/95e9d9923f8a8b4a01da1ea138fcc39ec7b6b15f">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://nodesecurity.io/advisories/1012">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-SETVALUE-450213">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Override Protection Bypass</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              qs
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, body-parser@1.9.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>qs</code> to version 6.0.4, 6.1.2, 6.2.3, 6.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/ljharb/qs/issues/200">GitHub Issue</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:qs:20170213">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Uninitialized Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              npmconf
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and npmconf@0.0.24

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>npmconf</code> to version 2.1.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://hackerone.com/reports/320269">HAckerOne Report</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:npmconf:20180512">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              negotiator
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, errorhandler@1.2.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>negotiator</code> to version 0.6.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">OSWAP Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:negotiator:20160616">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mongodb
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, mongoose@4.2.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mongodb</code> to version 3.1.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.npmjs.com/advisories/1203">NPM Security Advisory</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MONGODB-473855">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mixin-deep
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mixin-deep</code> to version 2.0.1, 1.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jonschlinkert/mixin-deep/commit/8f464c8ce9761a8c9c2b3457eaeee9d404fa7af9">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MIXINDEEP-450212">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.6 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/pull/592">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20150520">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.7 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/commit/cd2f6f5b7091154c5526e79b5f3bfb4d15995a51">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170112">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/markedjs/marked/pull/976/commits/6d1901ff71abb83aa32ca9a5ce47471382ea42a9">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/issues/925">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/pull/958">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/chjj/marked/issues/937">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/pull/958">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170907">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.18 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/markedjs/marked/pull/1083/commits/b15e42b67cec9ded8505e9d68bb8741ad7a9590d">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/markedjs/marked/pull/1083">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20180225">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              lodash
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and lodash@4.17.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>lodash</code> to version 4.17.12 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/lodash/lodash/issues/4348">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/pull/4336">GitHub PR</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/pull/4355">GitHub PR</a></p>
          </li>
          <li><p><a href="https://github.com/sailshq/lodash/pull/1">GitHub PR</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1065">Node Security Advisory</a></p>
          </li>
          <li><p><a href="https://snyk.io/blog/snyk-research-team-discovers-severe-prototype-pollution-security-vulnerabilities-affecting-all-versions-of-lodash/">Snyk Blog</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-LODASH-450202">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              lodash
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and lodash@4.17.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>lodash</code> to version 4.17.11 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/lodash/lodash/commit/90e6199a161b6445b01454517b40ef65ebecd2ad">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/pull/4337">GitHub PR</a></p>
          </li>
          <li><p><a href="https://hackerone.com/reports/380873">HackerOne Report</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1066">NPM Security Advisory</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1068">NPM Security Advisory</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1071">NPM Security Advisory</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/782">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-LODASH-73638">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 4.0.14, 4.1.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/7372d4e9dffc9d70c09671aa28b9392a1577fd86">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/issues/1495">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/755">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-173692">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 3.0.7, 4.1.2, 4.0.14 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/cd38583216dce3252831916323202749431c773e">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/issues/1495">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-173692">SNYK-JS-HANDLEBARS-173692</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-174183">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 4.3.0, 3.8.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/213c0bbe3c4bd83a534d67384e5afa0000347ff6">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/7b67a29a8c926b38af265c727ff6551fbb277111">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/issues/1558">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1164">Reference</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/blob/master/release-notes.md#v430---september-24th-2019">Release Notes</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-469063">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 4.4.5 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/8d5530ee2c3ea9f0aee3fde310b9f36887d00b8b">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/wycats/handlebars.js/issues/1579">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1300">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-480388">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 4.5.3, 3.0.8 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://www.npmjs.com/advisories/1316">NPM Security Advisory #1</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1324">NPM Security Advisory #2</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-534478">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              handlebars
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>handlebars</code> to version 4.5.3, 3.0.8 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/wycats/handlebars.js/commit/198887808780bbef9dba67a8af68ece091d5baa7">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1325">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-534988">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              fresh
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>fresh</code> to version 0.5.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jshttp/fresh/commit/21a0f0c2a5f447e0d40bc16be0c23fa98a7b46ec">GitHub Commit</a></li>
          <li><a href="https://github.com/jshttp/fresh/issues/24">GitHub Issue</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:fresh:20170908">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              express-fileupload
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and express-fileupload@0.0.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>express-fileupload</code> to version 1.1.6-alpha.6 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/richardgirges/express-fileupload/pull/171">GitHub PR</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-EXPRESSFILEUPLOAD-473997">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.3</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161128">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Code Injection</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              dustjs-linkedin
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and dustjs-linkedin@2.5.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>dustjs-linkedin</code> to version 2.6.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://artsploit.blogspot.co.il/2016/08/pprce2.html">Artsploit Blog</a></p>
          </li>
          <li><p><a href="https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/linkedin/dustjs/issues/741">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/linkedin/dustjs/pull/534">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:dustjs-linkedin:20160819">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              adm-zip
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and adm-zip@0.4.7

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>adm-zip</code> to version 0.4.11 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/cthackers/adm-zip/commit/d01fa8c80c3a5fcf5ce1eda82d96600c62910d3f">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/cthackers/adm-zip/pull/212/commits/6f4dfeb9a2166e93207443879988f97d88a37cde">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://hackerone.com/reports/362118">Hackerone Report</a></p>
          </li>
          <li><p><a href="https://github.com/snyk/zip-slip-vulnerability">Zip Slip Advisory</a></p>
          </li>
          <li><p><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:adm-zip:20180415">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              yargs-parser
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>yargs-parser</code> to version 13.1.2, 15.0.1, 18.1.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://gist.github.com/Kirill89/dcd8100d010896157a36624119439832">Command Injection PoC</a></p>
          </li>
          <li><p><a href="https://github.com/yargs/yargs-parser/commit/63810ca1ae1a24b08293a4d971e70e058c7a41e2">GitHub Fix Commit</a></p>
          </li>
          <li><p><a href="https://snyk.io/blog/prototype-pollution-minimist/">Snyk Research Blog</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-YARGSPARSER-560381">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Directory Traversal</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              st
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and st@0.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version 0.2.5 or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/isaacs/st#security-status">https://github.com/isaacs/st#security-status</a></li>
          <li><a href="http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers">http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20140206">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Open Redirect</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              st
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and st@0.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p> Fixed in: 1.2.2</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20171013">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              semver
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, npmconf@0.0.24 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Update to a version 4.3.2 or greater. From the issue description [2]: &quot;Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service.&quot;</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/npm/npm/releases/tag/v2.7.5">GitHub Release</a></li>
          </ul>
          <h2 id="remediation-1">Remediation</h2>
          <p>Upgrade <code>semver</code> to version 4.3.2 or higher.</p>
          <h2 id="references-1">References</h2>
          <ul>
          <li><a href="https://github.com/npm/npm/releases/tag/v2.7.5">GitHub Release</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:semver:20150403">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ms
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, humanize-ms@1.0.1 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 0.7.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://www.openwall.com/lists/oss-security/2016/04/20/11">OSS security Advisory</a></p>
          </li>
          <li><p><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">OWASP - ReDoS</a></p>
          </li>
          <li><p><a href="https://www.securityfocus.com/bid/96389">Security Focus</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20151024">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Information Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mongoose
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and mongoose@4.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mongoose</code> to version 5.7.5 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/Automattic/mongoose/commit/f3eca5b94d822225c04e96cbeed9f095afb3c31c">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/Automattic/mongoose/issues/8222">GitHub Issue</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MONGOOSE-472486">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Remote Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mongoose
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and mongoose@4.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mongoose</code> to version &gt;= 3.8.39 or &gt;= 4.3.6.</p>
          <p>If a direct dependency update is not possible, use <a href="https://snyk.io/docs/using-snyk#wizard"><code>snyk wizard</code></a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/Automattic/mongoose/issues/3764">GitHub Issue</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mongoose:20160116">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              moment
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and moment@2.15.1

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p> Fixed in: 2.15.2</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20161019">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              minimist
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>minimist</code> to version 0.2.1, 1.2.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://gist.github.com/Kirill89/47feb345b09bf081317f08dd43403a8a">Command Injection PoC</a></p>
          </li>
          <li><p><a href="https://github.com/substack/minimist/commit/63e7ed05aa4b1889ec2f3b196426db4500cbda94">GitHub Fix Commit #1</a></p>
          </li>
          <li><p><a href="https://github.com/substack/minimist/commit/38a4d1caead72ef99e824bb420a2528eec03d9ab">GitHub Fix Commit #2</a></p>
          </li>
          <li><p><a href="https://snyk.io/blog/prototype-pollution-minimist/">Snyk Research Blog</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MINIMIST-559764">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mem
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade mem to version 4.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/sindresorhus/mem/commit/da4e4398cb27b602de3bd55f746efa9b4a31702b">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/sindresorhus/mem/issues/14">GitHub Issue</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mem:20180117">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.6.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/markedjs/marked/commit/00f1f7a23916ef27186d0904635aa3509af63d47">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/markedjs/marked/pull/1460/commits/be27472a8169dda7875330939f8115ab677cdc07">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/markedjs/marked/pull/1460">GitHub PR</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/812">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MARKED-174116">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.4.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/markedjs/marked/commit/09afabf69c6d0c919c03443f47bdfe476566105d">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/markedjs/marked/pull/1224">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-MARKED-451540">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/markedjs/marked/pull/976/commits/cb72584c5d9d32ebfdbb99e35fb9b81af2b79686">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/issues/926">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/chjj/marked/pull/958">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815-1">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              lodash
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and lodash@4.17.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>lodash</code> to version 4.17.11 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/lodash/lodash/commit/5c08f18d365b64063bfbfa686cbb97cdd6267347">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/issues/3359">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/pull/4450">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-LODASH-73639">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              lodash
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and lodash@4.17.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>lodash</code> to version 4.17.5 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/lodash/lodash/commit/d8e069cc3410082e44eb18fcf8e7f3d08ebe1d4a">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/lodash/lodash/pull/4337">GitHub PR</a></p>
          </li>
          <li><p><a href="https://hackerone.com/reports/310443">HackerOne Report</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1067">NPM Security Advisory</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1069">NPM Security Advisory</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/1070">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:lodash:20180130">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              jquery
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and jquery@2.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>jquery</code> to version 3.4.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/jquery/jquery/pull/4333">GitHub PR</a></p>
          </li>
          <li><p><a href="https://hackerone.com/reports/454365">Hackerone Report</a></p>
          </li>
          <li><p><a href="https://snyk.io/blog/after-three-years-of-silence-a-new-jquery-prototype-pollution-vulnerability-emerges-once-again/">Snyk Blog</a></p>
          </li>
          <li><p><a href="https://github.com/DanielRuf/snyk-js-jquery-174006">Third-Party Backported Patches Repo</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-JQUERY-174006">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              jquery
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and jquery@2.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>jquery</code> to version 1.12.2, 2.2.2, 3.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/jquery/jquery/commit/f60729f3903d17917dc351f3ac87794de379b0cc">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/jquery/jquery/pull/2588/commits/c254d308a7d3f1eac4d0b42837804cfffcba4bb2">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/jquery/jquery/issues/2432">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/jquery/jquery/pull/2588">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:jquery:20150627">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">GPL-2.0 license</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Module:

                              goof
                      </li>

                      <li class="card__meta__item">Introduced through:
                                  <a href="/test//goof@1.0.1">
                                      goof@1.0.1
                                  </a>


                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:npm:goof:GPL-2.0">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130-1">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ms
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, mongoose@4.2.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 2.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/zeit/ms/pull/89">GitHub PR</a></li>
          <li><a href="https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20170412">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              moment
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@1.0.1 and moment@2.15.1

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>moment</code> to version 2.19.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/moment/moment/issues/4163">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/moment/moment/pull/4326">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20170905">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mime
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mime</code> to version 1.4.1, 2.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/broofa/node-mime/commit/1df903fdeb9ae7eaa048795b8d580ce2c98f40b0">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/broofa/node-mime/commit/855d0c4b8b22e4a80b9401a81f2872058eae274d">GitHub Commit</a></p>
          </li>
          <li><p><a href="https://github.com/broofa/node-mime/issues/167">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://www.npmjs.com/advisories/535">NPM Security Advisory</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mime:20170907">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Information Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              kind-of
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, tap@11.1.5 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>kind-of</code> to version 6.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><p><a href="https://github.com/jonschlinkert/kind-of/issues/30">GitHub Issue</a></p>
          </li>
          <li><p><a href="https://github.com/jonschlinkert/kind-of/pull/31">GitHub PR</a></p>
          </li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JS-KINDOF-537849">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              debug
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@1.0.1, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>debug</code> to version 2.6.9, 3.1.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/visionmedia/debug/issues/501">GitHub Issue</a></li>
          <li><a href="https://github.com/visionmedia/debug/pull/504">GitHub PR</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:debug:20170905">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
        </div><!-- cards -->
      </div>
    </div><!-- .layout-container -->

  </main><!-- .layout-stacked__content -->
</body>

</html>


`

exports[`test/snyk-to-html.test.ts TAP test snyk-to-html handles -a argument correctly > should be expected snapshot containing actionable remediations 1`] = `
undefined
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="49 known vulnerabilities found in 232 vulnerable dependency paths.">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">

    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }

    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }

    a:hover,
    a:focus,
    a:active {
      border-bottom: 2px solid #4b45a9;
    }

    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }

    ul {
      padding: 0 1em;
      margin: 1em 0;
    }

    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }

    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }

    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }

    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }

    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }


  /* Layout */

    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
    }

    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }

  /* Header */

    .header {
      padding-bottom: 1px;
    }

    .project__header {
      background-color: #4C4A73;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }

    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
      float: left;
    }

    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }

    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }

    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }

    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }

  /* Card */

    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }

    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }

    .card .label__text {
      vertical-align: text-top;
    }

    .card .label--high {
      background-color: #B51B72;
      border-color: #B51B72;
    }

    .card .label--medium {
      background-color: #E29022;
      border-color: #E29022;
    }

    .card .label--low {
      background-color: #222049;
      border-color: #222049;
    }

    .card .card.severity--low {
      border-color: #222049;
    }

    .card .card.severity--medium {
      border-color: #E29022;
    }

    .card .card.severity--high {
      border-color: #B51B72;
    }

    .card--vuln {
      padding-top: 4em;
    }

    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }

    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }

    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }

    .card .card__meta__paths {
      font-size: 0.9em;
    }

    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }

    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }

    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
      padding: 0.5em;
    }



  </style>
  <style type="text/css">
    .remediation-card {
      background-color: #edecf6;
      border-radius: 2px;
      padding: 1px;
      box-shadow: inset 0 0 0 1px #938fc7, 0 0 0 2px transparent;
      border-radius: 2px;
    }
    .remediation-card__header {
      align-items: center;
      background-color: #fff;
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__body {
      background-color: #edecf6;
      border-top-color: #938fc7;
      padding: 0;
      border-top: 1px solid #d3d3d9;
      position: relative;
    }
    .remediation-card__layout-container {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
    }
    .remediation-card__pane {
      background-color: #fff;
      border-top: 1px solid #d3d3d9;
      padding: 32px 0;
    }
    .remediation-card__nav {
      position: relative;
      top: 1px;
    }
    .remediation-card__nav-list {
      display: flex;
      margin: 0 0;
      padding: 0 0;
    }
    .remediation-card__nav-item {
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-item--active {
      background-color: #fff;
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-link {
      color: #727184;
      border: 1px solid transparent;
      border-top-width: 3px;
      border-bottom-color: #d3d3d9;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__nav-link--active {
      color: #393842;
      border: 1px solid #d3d3d9;
      border-bottom: none;
      border-top: 3px solid #df8620;
      border-radius: .25rem .25rem 0 0;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__block {
      background-color: #fff;
      box-shadow: inset 0 0 0 1px hsl(244, 8%, 84%);
      border-radius: 2px;
      padding: 1px;
      margin-top: 12px;
    }
    .remediation-card__expandable-container {
      cursor: pointer;
      align-items: stretch;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__expandable-wrapper >  .remediation-card__expand {
      visibility: hidden;
      height: 0
    }
    .remediation-card__expandable-wrapper.shown > .remediation-card__expand {
      visibility: visible;
      height: auto;
    }
    .remediation-card__expandable-title {
      align-items: center;
      display: flex;
      font-size: 1rem;
      padding: 12px;
      position: relative;
      width: 100%;
    }
    .remediation-card__chevron {
      display: inline-block;
      margin-right: 8px;
      transition: transform .2s ease-in-out;
      position: relative;
      /* transform: rotate(-90deg); */
    }
    .remediation-card__chevron svg {
      width: 20px;
      height: 20px;
    }
    .remediation-card__chevron .scoped {
      display: inline-block;
      fill: currentColor;
      overflow: hidden;
      vertical-align: middle;
    }
    .remediation-card__severity {
      margin-right: 8px;
      font-size: .75rem;
      line-height: 1.35;
    }
    .remediation-card__severity-text {
      padding: 0;
      text-align: center;
      width: 26px;
      color: white;
      margin-right: 8px;
      font-size: .75rem;
    }
    .remediation-card__severity-label {
      position: relative;
      top: 1px;
    }
    .remediation-card__severity--high {
      background-color: #b31a6b;
      border-color: #b31a6b;
    }
    .remediation-card__severity--medium {
      background-color: #df8620;
      border-color: #df8620;
    }
    .remediation-card__severity--low {
      background-color: #595775;
      border-color: #595775;
    }
    .remediation-card__h2 {
      color: #393842;
      display: block;
      padding: 16px 24px 12px;
      width: 100%;
    }
    .remediation-card__item {
      padding-left: 0;
      padding-right: 0;
      list-style: none;
    }
    .remediation-card__vuln {
      align-items: center;
      border-top: 1px solid #b3b2bd;
      display: flex;
      padding: 12px;
    }
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      width: 100%;
    }

    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }

    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px 0 0;
      width: 30%;
      margin-right: 5%;
    }

    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }

    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="remediation-section-projects">
  <main class="layout-stacked">
    <div class="layout-stacked__header header">
      <header class="project__header">
        <div class="layout-container--short">
          <h1 class="project__header__title">Snyk test report</h1>
          <p class="timestamp">TIMESTAMP</p>
          <div class="source-panel">
            <span>Scanned the following path:</span>
            <ul>
              <li>/path/to/goof (npm)</li>
            </ul>
          </div>
          <div class="meta-counts">
            <div class="meta-count"><span>49</span> <span>known vulnerabilities</span></div>
            <div class="meta-count"><span>232 vulnerable dependency paths</span></div>
            <div class="meta-count"><span>474</span> <span>dependencies</span></div>
          </div><!-- .meta-counts -->
        </div><!-- .layout-container--short -->
      </header><!-- .project__header -->
    </div><!-- .layout-stacked__header -->

    <section class="layout-container">
    <table class="metatable">
        <tbody>
        <tr class="meta-row"><th class="meta-row-label">Vulnerabilities</th> <td class="meta-row-value">49</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Dependencies</th> <td class="meta-row-value">474</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Created on</th> <td class="meta-row-value"><p class="timestamp">TIMESTAMP</p></td></tr>
        <tr class="meta-row"><th class="meta-row-label">Branch</th> <td class="meta-row-value">/path/to/goof</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Tested with</th> <td class="meta-row-value">npm</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">package-lock.json</td></tr>
        </tbody>
    </table><!-- .meta-counts -->
    </section><!-- .layout-container-->
    <section class="layout-container">
      <div class='remediation-card'>
        <header class="remediation-card__header">
          <span class="remediation-card__h2"><h2>Remediation advice</h2></span>
        </header>
        <div class='remediation-card__body'>
          <!---maybe a wrapper div-->
          <div class='remediation-card__layout-container'>
            <nav class="remediation-card__nav">
              <ul class="remediation-card__nav-list">
                <li class="remediation-card__nav-item--active"><span class="remediation-card__nav-link--active">Upgradable issues (16)</span></li>
                <li class="remediation-card__nav-item"><span class="remediation-card__nav-link">Patchable issues (1)</span></li>
              </ul>
            </nav>
          </div>
          <div class='remediation-card__pane'>
            <div class='remediation-card__layout-container'>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> marked@0.3.5 </strong> to <strong> marked@0.6.2 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> express@4.12.4 </strong> to <strong> express@4.16.0 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Prototype Override Protection Bypass</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> lodash@4.17.4 </strong> to <strong> lodash@4.17.12 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Prototype Pollution</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Prototype Pollution</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Prototype Pollution</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> mongoose@4.2.4 </strong> to <strong> mongoose@5.7.5 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Information Exposure</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Denial of Service (DoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Remote Memory Exposure</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> st@0.2.4 </strong> to <strong> st@1.2.2 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Open Redirect</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Directory Traversal</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> ejs@1.0.0 </strong> to <strong> ejs@2.5.5 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Denial of Service (DoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Arbitrary Code Execution</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> npmconf@0.0.24 </strong> to <strong> npmconf@2.1.3 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Uninitialized Memory Exposure</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> jquery@2.2.4 </strong> to <strong> jquery@3.4.0 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Prototype Pollution</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Cross-site Scripting (XSS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> tap@11.1.5 </strong> to <strong> tap@12.6.2 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Prototype Pollution</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Denial of Service (DoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> adm-zip@0.4.7 </strong> to <strong> adm-zip@0.4.11 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Arbitrary File Write via Archive Extraction (Zip Slip)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> body-parser@1.9.0 </strong> to <strong> body-parser@1.17.1 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Prototype Override Protection Bypass</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> dustjs-linkedin@2.5.0 </strong> to <strong> dustjs-linkedin@2.6.0 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Code Injection</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> errorhandler@1.2.0 </strong> to <strong> errorhandler@1.4.3 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> express-fileupload@0.0.5 </strong> to <strong> express-fileupload@1.1.6 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="high severity issues" class="remediation-card__severity-text remediation-card__severity--high"><span class="remediation-card__label">H</span></div>
                                <span>Denial of Service (DoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> moment@2.15.1 </strong> to <strong> moment@2.19.3 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class='remediation-card__block'>
                    <div class='remediation-card__expandable-wrapper shown'>
                        <div class='remediation-card__expandable-container js-remediation' >
                          <div class='remediation-card__expandable-title'>
                            <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                              <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                class="material-design-icon__svg block-expandable__chevron">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                  <title>Chevron Down icon</title>
                                </path>
                              </svg>
                            </span>
                            <span class='remediation-card__text'>
                              Upgrade <strong> ms@0.7.3 </strong> to <strong> ms@2.0.0 </strong>
                            </span>
                          </div>
                        </div>
                        <div class='remediation-card__expand'>
                          <div class='TODO'>
                            <!--each vuln for the upgrade -->
                            <ul>
                            <li class='remediation-card__item'>
                              <div class='remediation-card__vuln'>
                                <div title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></div>
                                <span>Regular Expression Denial of Service (ReDoS)</span>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- unresolved -->
    <section class="layout-container" style="padding-top: 35px;">
      <h2>No remediation path available</h2>
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is a extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        Templates may alter an Objects&#39; prototype, thus allowing an attacker to execute arbitrary code on the server.</p>
        <h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 4.0.14, 4.1.2 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/7372d4e9dffc9d70c09671aa28b9392a1577fd86">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/issues/1495">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://www.npmjs.com/advisories/755">NPM Security Advisory</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-173692">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is a extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        A Prototype Pollution allowing Remote Code Execution can be exploited using the constructor, via the &#39;lookup&#39; helper.
        This vulnerability is due to an incomplete fix for: <code>SNYK-JS-HANDLEBARS-173692</code></p>
        <h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 3.0.7, 4.1.2, 4.0.14 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/cd38583216dce3252831916323202749431c773e">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/issues/1495">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-173692">SNYK-JS-HANDLEBARS-173692</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-174183">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is a extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        Templates may alter an Object&#39;s <code>__proto__</code> and <code>__defineGetter__</code> properties, which may allow an attacker to execute arbitrary code on the server through crafted payloads.</p>
        <h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 4.3.0, 3.8.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/213c0bbe3c4bd83a534d67384e5afa0000347ff6">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/7b67a29a8c926b38af265c727ff6551fbb277111">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/issues/1558">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://www.npmjs.com/advisories/1164">Reference</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/blob/master/release-notes.md#v430---september-24th-2019">Release Notes</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-469063">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Denial of Service (DoS)</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is an extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Denial of Service (DoS).
        The package&#39;s parser may be forced into an endless loop while processing specially-crafted templates, which may allow attackers to exhaust system resources leading to Denial of Service.</p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 4.4.5 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/8d5530ee2c3ea9f0aee3fde310b9f36887d00b8b">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/wycats/handlebars.js/issues/1579">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://www.npmjs.com/advisories/1300">NPM Security Advisory</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-480388">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Arbitrary Code Execution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is a extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Arbitrary Code Execution.
        The package&#39;s lookup helper doesn&#39;t validate templates correctly, allowing attackers to submit templates that execute arbitrary JavaScript in the system.</p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 4.5.3, 3.0.8 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://www.npmjs.com/advisories/1316">NPM Security Advisory #1</a></p>
        </li>
        <li><p><a href="https://www.npmjs.com/advisories/1324">NPM Security Advisory #2</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-534478">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            handlebars
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/handlebars">handlebars</a> is an extension to the Mustache templating language.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        It is possible to add or modify properties to the Object prototype through a malicious template. This may allow attackers to crash the application or execute Arbitrary Code in specific conditions.</p>
        <h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>handlebars</code> to version 4.5.3, 3.0.8 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/wycats/handlebars.js/commit/198887808780bbef9dba67a8af68ece091d5baa7">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://www.npmjs.com/advisories/1325">NPM Security Advisory</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-HANDLEBARS-534988">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" >
            <div class="card__section">
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Information Exposure</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            kind-of
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        test-exclude@4.2.1
                                         <span class="list-paths__item__arrow">›</span>
                                        micromatch@3.1.10
                                         <span class="list-paths__item__arrow">›</span>
                                        extglob@2.0.4
                                         <span class="list-paths__item__arrow">›</span>
                                        expand-brackets@2.1.4
                                         <span class="list-paths__item__arrow">›</span>
                                        snapdragon@0.8.2
                                         <span class="list-paths__item__arrow">›</span>
                                        base@0.11.2
                                         <span class="list-paths__item__arrow">›</span>
                                        define-property@1.0.0
                                         <span class="list-paths__item__arrow">›</span>
                                        is-descriptor@1.0.2
                                         <span class="list-paths__item__arrow">›</span>
                                        is-data-descriptor@1.0.0
                                         <span class="list-paths__item__arrow">›</span>
                                        kind-of@6.0.2

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://github.com/jonschlinkert/kind-of">kind-of</a> is a package that gets the native type of a value.</p>
        <p>Affected versions of this package are vulnerable to Information Exposure.
        It leverages the built-in constructor of unsafe user-input to detect type information. However, a crafted payload can overwrite this built in attribute to manipulate the type detection result.</p>
        <h2 id="poc-by-feng-xiao">PoC by Feng Xiao</h2>
        <pre><code>var kindOf = require(&#39;kind-of&#39;);


        var user_input = {
          user: &#39;barney&#39;,
          age: 36,
          active: true,
          &quot;constructor&quot;:{&quot;name&quot;:&quot;Symbol&quot;}
        };
        console.log(kindOf(user_input));</code></pre><h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>kind-of</code> to version 6.0.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/jonschlinkert/kind-of/issues/30">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://github.com/jonschlinkert/kind-of/pull/31">GitHub PR</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-KINDOF-537849">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" >
            <div class="card__section">
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            minimist
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        istanbul-reports@1.4.0
                                         <span class="list-paths__item__arrow">›</span>
                                        handlebars@4.0.11
                                         <span class="list-paths__item__arrow">›</span>
                                        optimist@0.6.1
                                         <span class="list-paths__item__arrow">›</span>
                                        minimist@0.0.8

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/minimist">minimist</a> is a parse argument options module.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        The library could be tricked into adding or modifying properties of <code>Object.prototype</code> using a <code>constructor</code> or <code>__proto__</code> payload.</p>
        <h2 id="poc-by-snyk">PoC by Snyk</h2>
        <pre><code>require(&#39;minimist&#39;)(&#39;--__proto__.injected0 value0&#39;.split(&#39; &#39;));
        console.log(({}).injected0 === &#39;value0&#39;); // true

        require(&#39;minimist&#39;)(&#39;--constructor.prototype.injected1 value1&#39;.split(&#39; &#39;));
        console.log(({}).injected1 === &#39;value1&#39;); // true</code></pre><h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>minimist</code> to version 0.2.1, 1.2.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://gist.github.com/Kirill89/47feb345b09bf081317f08dd43403a8a">Command Injection PoC</a></p>
        </li>
        <li><p><a href="https://github.com/substack/minimist/commit/63e7ed05aa4b1889ec2f3b196426db4500cbda94">GitHub Fix Commit #1</a></p>
        </li>
        <li><p><a href="https://github.com/substack/minimist/commit/38a4d1caead72ef99e824bb420a2528eec03d9ab">GitHub Fix Commit #2</a></p>
        </li>
        <li><p><a href="https://snyk.io/blog/prototype-pollution-minimist/">Snyk Research Blog</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-MINIMIST-559764">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            mixin-deep
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        test-exclude@4.2.1
                                         <span class="list-paths__item__arrow">›</span>
                                        micromatch@3.1.10
                                         <span class="list-paths__item__arrow">›</span>
                                        extglob@2.0.4
                                         <span class="list-paths__item__arrow">›</span>
                                        expand-brackets@2.1.4
                                         <span class="list-paths__item__arrow">›</span>
                                        snapdragon@0.8.2
                                         <span class="list-paths__item__arrow">›</span>
                                        base@0.11.2
                                         <span class="list-paths__item__arrow">›</span>
                                        mixin-deep@1.3.1

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/mixin-deep">mixin-deep</a> is a package that deeply mixes the properties of objects into the first object.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        The function <code>mixin-deep</code> could be tricked into adding or modifying properties of <code>Object.prototype</code> using a <code>constructor</code> payload.</p>
        <h2 id="poc-by-snyk">PoC by Snyk</h2>
        <pre><code>const mixin = require(&#39;mixin-deep&#39;);
        const payload = &#39;{&quot;constructor&quot;: {&quot;prototype&quot;: {&quot;a0&quot;: true}}}&#39;

        function check() {
            mixin({}, JSON.parse(payload));
            if (({})[\`a0\`] === true) {
                  console.log(\`Vulnerable to Prototype Pollution via \${payload}\`)
          }
        }

        check();</code></pre><h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>mixin-deep</code> to version 2.0.1, 1.3.2 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/jonschlinkert/mixin-deep/commit/8f464c8ce9761a8c9c2b3457eaeee9d404fa7af9">GitHub Commit</a></li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-MIXINDEEP-450212">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" >
            <div class="card__section">
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">Prototype Pollution</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:

                            set-value
                    </li>

                    <li class="card__meta__item">Introduced through:


                                    goof@1.0.1, tap@11.1.5 and others
                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        tap@11.1.5
                                         <span class="list-paths__item__arrow">›</span>
                                        nyc@11.9.0
                                         <span class="list-paths__item__arrow">›</span>
                                        test-exclude@4.2.1
                                         <span class="list-paths__item__arrow">›</span>
                                        micromatch@3.1.10
                                         <span class="list-paths__item__arrow">›</span>
                                        extglob@2.0.4
                                         <span class="list-paths__item__arrow">›</span>
                                        expand-brackets@2.1.4
                                         <span class="list-paths__item__arrow">›</span>
                                        snapdragon@0.8.2
                                         <span class="list-paths__item__arrow">›</span>
                                        base@0.11.2
                                         <span class="list-paths__item__arrow">›</span>
                                        cache-base@1.0.1
                                         <span class="list-paths__item__arrow">›</span>
                                        union-value@1.0.0
                                         <span class="list-paths__item__arrow">›</span>
                                        set-value@0.4.3

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <h2 id="overview">Overview</h2>
        <p><a href="https://www.npmjs.com/package/set-value">set-value</a> is a package that creates nested values and any intermediaries using dot notation (&#39;a.b.c&#39;) paths.</p>
        <p>Affected versions of this package are vulnerable to Prototype Pollution.
        The function <code>set-value</code> could be tricked into adding or modifying properties of <code>Object.prototype</code> using any of the <code>constructor</code>, <code>prototype</code> and <code>_proto_</code> payloads.</p>
        <h2 id="poc-by-snyk">PoC by Snyk</h2>
        <pre><code>const setFn = require(&#39;set-value&#39;);
        const paths = [
          &#39;constructor.prototype.a0&#39;,
          &#39;__proto__.a1&#39;,
        ];

        function check() {
          for (const p of paths) {
              setFn({}, p, true);
          }
          for (let i = 0; i &lt; paths.length; i++) {
              if (({})[\`a\${i}\`] === true) {
                  console.log(\`Yes with \${paths[i]}\`);
              }
          }
        }

        check();
        </code></pre><h2 id="details">Details</h2>
        <p>Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as <code>_proto_</code>, <code>constructor</code> and <code>prototype</code>. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values.  Properties on the <code>Object.prototype</code> are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.</p>
        <p>There are two main ways in which the pollution of prototypes occurs:</p>
        <ul>
        <li><p>Unsafe <code>Object</code> recursive merge</p>
        </li>
        <li><p>Property definition by path</p>
        </li>
        </ul>
        <h3 id="unsafe-object-recursive-merge">Unsafe Object recursive merge</h3>
        <p>The logic of a vulnerable recursive merge function follows the following high-level model:</p>
        <pre><code>merge (target, source)

          foreach property of source

            if property exists and is an object on both the target and the source

              merge(target[property], source[property])

            else

              target[property] = source[property]</code></pre><br>

        <p>When the source object contains a property named <code>_proto_</code> defined with <code>Object.defineProperty()</code> , the condition that checks if the property exists and is an object on both the target and the source passes and the merge recurses with the target, being the prototype of <code>Object</code> and the source of <code>Object</code> as defined by the attacker. Properties are then copied on the <code>Object</code> prototype.</p>
        <p>Clone operations are a special sub-class of unsafe recursive merges, which occur when a recursive merge is conducted on an empty object: <code>merge({},source)</code>.</p>
        <p><code>lodash</code> and <code>Hoek</code> are examples of libraries susceptible to recursive merge attacks.</p>
        <h3 id="property-definition-by-path">Property definition by path</h3>
        <p>There are a few JavaScript libraries that use an API to define property values on an object based on a given path. The function that is generally affected contains this signature: <code>theFunction(object, path, value)</code></p>
        <p>If the attacker can control the value of “path”, they can set this value to <code>_proto_.myValue</code>. <code>myValue</code> is then assigned to the prototype of the class of the object.</p>
        <h2 id="types-of-attacks">Types of attacks</h2>
        <p>There are a few methods by which Prototype Pollution can be manipulated:</p>
        <table>
        <thead>
        <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Short description</th>
        </tr>
        </thead>
        <tbody><tr>
        <td><strong>Denial of service (DoS)</strong></td>
        <td>Client</td>
        <td>This is the most likely attack. <br>DoS occurs when <code>Object</code> holds generic functions that are implicitly called for various operations (for example, <code>toString</code> and <code>valueOf</code>). <br> The attacker pollutes <code>Object.prototype.someattr</code> and alters its state to an unexpected value such as <code>Int</code> or <code>Object</code>. In this case, the code fails and is likely to cause a denial of service.  <br><strong>For example:</strong> if an attacker pollutes <code>Object.prototype.toString</code> by defining it as an integer, if the codebase at any point was reliant on <code>someobject.toString()</code> it would fail.</td>
        </tr>
        <tr>
        <td><strong>Remote Code Execution</strong></td>
        <td>Client</td>
        <td>Remote code execution is generally only possible in cases where the codebase evaluates a specific attribute of an object, and then executes that evaluation.<br><strong>For example:</strong> <code>eval(someobject.someattr)</code>. In this case, if the attacker pollutes <code>Object.prototype.someattr</code> they are likely to be able to leverage this in order to execute code.</td>
        </tr>
        <tr>
        <td><strong>Property Injection</strong></td>
        <td>Client</td>
        <td>The attacker pollutes properties that the codebase relies on for their informative value, including security properties such as cookies or tokens.<br>  <strong>For example:</strong> if a codebase checks privileges for <code>someuser.isAdmin</code>, then when the attacker pollutes <code>Object.prototype.isAdmin</code> and sets it to equal <code>true</code>, they can then achieve admin privileges.</td>
        </tr>
        </tbody></table>
        <h2 id="affected-environments">Affected environments</h2>
        <p>The following environments are susceptible to a Prototype Pollution attack:</p>
        <ul>
        <li><p>Application server</p>
        </li>
        <li><p>Web server</p>
        </li>
        </ul>
        <h2 id="how-to-prevent">How to prevent</h2>
        <ol>
        <li><p>Freeze the prototype— use <code>Object.freeze (Object.prototype)</code>.</p>
        </li>
        <li><p>Require schema validation of JSON input.</p>
        </li>
        <li><p>Avoid using unsafe recursive merge functions.</p>
        </li>
        <li><p>Consider using objects without prototypes (for example, <code>Object.create(null)</code>), breaking the prototype chain and preventing pollution.</p>
        </li>
        <li><p>As a best practice use <code>Map</code> instead of <code>Object</code>.</p>
        </li>
        </ol>
        <h3 id="for-more-information-on-this-vulnerability-type">For more information on this vulnerability type:</h3>
        <p><a href="https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf">Arteau, Oliver. “JavaScript prototype pollution attack in NodeJS application.” GitHub, 26 May 2018</a></p>
        <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>set-value</code> to version 2.0.1, 3.0.1 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/jonschlinkert/set-value/commit/95e9d9923f8a8b4a01da1ea138fcc39ec7b6b15f">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://nodesecurity.io/advisories/1012">NPM Security Advisory</a></p>
        </li>
        </ul>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-SETVALUE-450213">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" >
            <div class="card__section">
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
                <div class="card--title">
                    <h2 class="card__title">GPL-2.0 license</h2>
                </div>

                <hr/>

                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Module:

                            goof
                    </li>

                    <li class="card__meta__item">Introduced through:
                                <a href="/test//goof@1.0.1">
                                    goof@1.0.1
                                </a>


                    </li>
                </ul>

                <hr/>


                        <h3 class="card__section__title">Detailed paths</h3>

                    <ul class="card__meta__paths">
                                <li>
                                <span class="list-paths__item__introduced"><em>Introduced through</em>:
                                        goof@1.0.1

                                </span>

                            </li>
                    </ul><!-- .list-paths -->

            </div><!-- .card__section -->

              <hr/>
              <!-- Overview -->
              <p>GPL-2.0 license</p>

              <hr/>

            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:npm:goof:GPL-2.0">More about this vulnerability</a></p>
            </div>

        </div><!-- .card -->
    </section><!-- end unresolved -->

  </main><!-- .layout-stacked__content -->
</body>
<script>
  const remediations = document.querySelectorAll(".js-remediation")
  remediations.forEach((question) => {
    question.parentElement.classList.toggle("shown");
    question.addEventListener("click", remediationClick);
  })

  function remediationClick(){
    this.parentElement.classList.toggle("shown");
  }
</script>

</html>


`

exports[`test/snyk-to-html.test.ts TAP template output displays vulns in descending order of severity > should be expected snapshot 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="81 known vulnerabilities found in 139 vulnerable dependency paths.">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">

    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }

    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }

    a:hover,
    a:focus,
    a:active {
      border-bottom: 2px solid #4b45a9;
    }

    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }

    ul {
      padding: 0 1em;
      margin: 1em 0;
    }

    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }

    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }

    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }

    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }

    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }


  /* Layout */

    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
    }

    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }

  /* Header */

    .header {
      padding-bottom: 1px;
    }

    .project__header {
      background-color: #4C4A73;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }

    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
      float: left;
    }

    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }

    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }

    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }

    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }

  /* Card */

    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }

    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }

    .card .label__text {
      vertical-align: text-top;
    }

    .card .label--high {
      background-color: #B51B72;
      border-color: #B51B72;
    }

    .card .label--medium {
      background-color: #E29022;
      border-color: #E29022;
    }

    .card .label--low {
      background-color: #222049;
      border-color: #222049;
    }

    .card .card.severity--low {
      border-color: #222049;
    }

    .card .card.severity--medium {
      border-color: #E29022;
    }

    .card .card.severity--high {
      border-color: #B51B72;
    }

    .card--vuln {
      padding-top: 4em;
    }

    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }

    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }

    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }

    .card .card__meta__paths {
      font-size: 0.9em;
    }

    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }

    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }

    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
      padding: 0.5em;
    }



  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      width: 100%;
    }

    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }

    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px 0 0;
      width: 30%;
      margin-right: 5%;
    }

    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }

    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">

    <div class="layout-stacked__header header">
      <header class="project__header">
        <div class="layout-container--short">
            <h1 class="project__header__title">Snyk test summary</h1>

          <p class="timestamp">TIMESTAMP</p>
          <div class="source-panel">
            <span>Scanned the following paths:</span>
            <ul>
              <li>./java-goof (maven)</li><li>./goof (npm)</li>
            </ul>
          </div>

          <div class="meta-counts">
            <div class="meta-count"><span>81</span> <span>known vulnerabilities</span></div>
            <div class="meta-count"><span>139 vulnerable dependency paths</span></div>
            <div class="meta-count"><span>492</span> <span>dependencies</span></div>
          </div><!-- .meta-counts -->
        </div><!-- .layout-container--short -->
      </header><!-- .project__header -->
    </div><!-- .layout-stacked__header -->

    <section class="layout-container">
    <table class="metatable">
        <tbody>
        <tr class="meta-row"><th class="meta-row-label">Vulnerabilities</th> <td class="meta-row-value">81</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Dependencies</th> <td class="meta-row-value">492</td></tr>
        <tr class="meta-row"><th class="meta-row-label">Created on</th> <td class="meta-row-value"><p class="timestamp">TIMESTAMP</p></td></tr>
        <tr class="meta-row"><th class="meta-row-label">Branch</th> <td class="meta-row-value"></td></tr>
        <tr class="meta-row"><th class="meta-row-label">Tested with</th> <td class="meta-row-value"></td></tr>
        <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value"></td></tr>
        </tbody>
    </table><!-- .meta-counts -->
    </section><!-- .layout-container-->

    <div class="layout-stacked__content">
      <div class="layout-container--short" style="padding-top: 35px;">
        <div class="cards--vuln filter--patch filter--ignore">
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Override Protection Bypass</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              qs
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, body-parser@1.9.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>qs</code> to version <code>6.4.0</code> or higher.
          <strong>Note:</strong> The fix was backported to the following versions <code>6.3.2</code>, <code>6.2.3</code>, <code>6.1.2</code>, <code>6.0.4</code>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d">GitHub Commit</a></li>
          <li><a href="https://github.com/ljharb/qs/issues/200">Report of an insufficient fix</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:qs:20170213">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.zeroturnaround:zt-zip
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.zeroturnaround:zt-zip</code> to version 1.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/zeroturnaround/zt-zip/commit/759b72f33bc8f4d69f84f09fcb7f010ad45d6fff">GitHub Commit</a></li>
          <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
          <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGZEROTURNAROUND-31681">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">GPL-3.0 license</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:

                              org.jboss.logging:jboss-logging
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.jboss.logging:jboss-logging:GPL-3.0">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Insecure Defaults</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30058">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.32, 2.5.10.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072">Metasploit GitHub PR</a></li>
          <li><a href="https://github.com/rapid7/metasploit-framework/issues/8064">Metasploit GitHub Issue</a></li>
          <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072/commits/fc0f63e77471baa40057effaaa8be0f205adc6b7">Metasploit GitHub Commit</a></li>
          <li><a href="https://github.com/tengzhangchao/Struts2_045-Poc">PoC</a></li>
          <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638">CVE</a></li>
          <li><a href="https://www.exploit-db.com/exploits/41570/">Exploit DB</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-045">Struts Wiki</a></li>
          <li><a href="http://blog.talosintelligence.com/2017/03/apache-0-day-exploited.html">Talos Intelligence Blog</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30207">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Command Injection</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30770">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.20.2, 2.3.24.2, 2.3.28.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3082">NVD</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30771">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Command Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30772">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Directory Traversal</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30778">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Command Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.13</code> or higher.</p>
          <p>It is possible that some REST actions stop working because of applied default restrictions on available classes. In this case please investigate the new interfaces that were introduced to allow class restrictions per action, those interfaces are:</p>
          <ul>
          <li>org.apache.struts2.rest.handler.AllowedClasses</li>
          <li>org.apache.struts2.rest.handler.AllowedClassNames</li>
          <li>org.apache.struts2.rest.handler.XStreamPermissionProvider</li>
          </ul>
          <p>If for some reason upgrading is not an option, consider the following workarounds:</p>
          <ol>
          <li><p>Disable handling XML pages and requests to such pages</p>
          <pre><code class="language-xml">&lt;constant name=&quot;struts.action.extension&quot; value=&quot;xhtml,,json&quot; /&gt;</code></pre>
          </li>
          <li><p>Override getContentType in XStreamHandler</p>
          <pre><code class="language-java">public class MyXStreamHandler extends XStreamHandler {
          public String getContentType() {
            return &quot;not-existing-content-type-@;/&amp;%$#@&quot;;
          }
          }</code></pre>
          </li>
          <li><p>Register the handler by overriding the one provided by the framework in your struts.xml</p>
          <pre><code class="language-xml">&lt;bean type=&quot;org.apache.struts2.rest.handler.ContentTypeHandler&quot; name=&quot;myXStreamHandmer&quot; class=&quot;com.company.MyXStreamHandler&quot;/&gt;
          &lt;constant name=&quot;struts.rest.handlerOverride.xml&quot; value=&quot;myXStreamHandler&quot;/&gt;</code></pre>
          </li>
          </ol>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805_announcement">LGTM Advisory</a></li>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805">LGTM Vulnerability Details</a></li>
          <li><a href="https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax">Apache Struts Statement on Equifax Security Breach</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-052">Apache Security Bulletin</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31495">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.33, 2.5.12 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-049.html">Struts Security Bulletin</a></li>
          <li><a href="https://lists.apache.org/thread.html/3795c4dd46d9ec75f4a6eb9eca11c11edd3e796c6c1fd7b17b5dc50d@%3Cannouncements.struts.apache.org%3E">Struts Announcements Mailing List</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31500">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Remote Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to versions 2.3.35, 2.5.17 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1620019">RedHat Bugzilla Bug</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-057">Struts2 Security Bulletin</a></li>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2018-11776">Lgtm Blog</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-32477">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30797">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Parameter Alteration</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30798">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Improper Input Validation</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30799">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30803">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Uninitialized Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              npmconf
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and npmconf@0.0.24

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>npmconf</code> to version 2.1.3.
          <strong>Note</strong> <code>npmconf</code> is deprecated and should not be used.
          <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://hackerone.com/reports/320269">HAckerOne Report</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:npmconf:20180512">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              negotiator
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, errorhandler@1.2.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>negotiator</code> to version <code>0.6.1</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
          <li><a href="https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c">https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:negotiator:20160616">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              minimatch
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>minimatch</code> to version <code>3.0.2</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
          <li><a href="https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955">https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:minimatch:20160620">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Content &amp; Code Injection (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.6 or higher.
          Also, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/pull/592">GitHub PR</a></li>
          <li><a href="https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20150520">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS) via Data URIs</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.7 or higher.
          Also, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/commit/cd2f6f5b7091154c5526e79b5f3bfb4d15995a51">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170112">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/925">GitHub Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.
          In the meantime, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/937">Github Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170907">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade marked to version 0.3.17 or higher</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub PR</a></li>
          <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20180225">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">XML External Entity (XXE) Injection</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              javax.servlet:jstl
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade to a version <code>1.3</code> or above. </p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0254">NVD</a></li>
          <li><a href="https://access.redhat.com/security/cve/CVE-2015-0254">Redhat Security</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-JAVAXSERVLET-30449">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">GPL-2.0 license</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Module:

                              goof
                      </li>

                      <li class="card__meta__item">Introduced through:
                                  <a href="/test//goof@0.0.3">
                                      goof@0.0.3
                                  </a>


                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:npm:goof:GPL-2.0">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              fresh
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>fresh</code> to version 0.5.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jshttp/fresh/issues/24">Github Issue</a></li>
          <li><a href="https://github.com/jshttp/fresh/commit/21a0f0c2a5f447e0d40bc16be0c23fa98a7b46ec">Github Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:fresh:20170908">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.3</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161128">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Code Injection</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              dustjs-linkedin
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and dustjs-linkedin@2.5.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version <code>2.6.0</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4">https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4</a></li>
          <li><a href="https://github.com/linkedin/dustjs/pull/534">https://github.com/linkedin/dustjs/pull/534</a></li>
          <li><a href="https://github.com/linkedin/dustjs/issues/741">https://github.com/linkedin/dustjs/issues/741</a></li>
          <li><a href="https://artsploit.blogspot.co.il/2016/08/pprce2.html">https://artsploit.blogspot.co.il/2016/08/pprce2.html</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:dustjs-linkedin:20160819">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              commons-fileupload:commons-fileupload
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload:commons-fileupload</code> to version 1.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/apache/commons-fileupload/blob/b1498c9877d751f8bc4635a6f252ebdfcba28518/src/changes/changes.xml#L84">Github ChangeLog</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1349475">Redhat Bugzilla</a></li>
          <li><a href="http://mail-archives.us.apache.org/mod_mbox/www-announce/201606.mbox/%3C6223ece6-2b41-ef4f-22f9-d3481e492832@apache.org%3E">Apache Mailing Archives</a></li>
          <li><a href="http://svn.apache.org/viewvc/commons/proper/fileupload/trunk/RELEASE-NOTES.txt?r1=1745717&amp;r2=1749637&amp;diff_format=h">Apache-SVN</a></li>
          <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3092">CVE</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30082">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              commons-fileupload:commons-fileupload
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload</code> to version 1.3.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1000031">NVD</a></li>
          <li><a href="http://www.tenable.com/security/research/tra-2016-12">Tenable Security</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L65">Github ChangeLog</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/commit/388e824518697c2c8f9f83fd964621d9c2f8fc4c">Github Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30401">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              commons-collections:commons-collections
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <div class="card__section">
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              adm-zip
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and adm-zip@0.4.7

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>adm-zip</code> to version 0.4.11 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/cthackers/adm-zip/pull/212">GitHub PR</a></li>
          <li><a href="https://github.com/cthackers/adm-zip/pull/212/commits/6f4dfeb9a2166e93207443879988f97d88a37cde">GitHub Commit 0.4.9</a></li>
          <li><a href="https://github.com/cthackers/adm-zip/commit/d01fa8c80c3a5fcf5ce1eda82d96600c62910d3f">GitHub Commit 0.4.11</a></li>
          <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
          <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:adm-zip:20180415">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Uninitialized Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              tunnel-agent
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>tunnel-agent</code> to version 0.6.0 or higher.
          <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4">PoC by ChALkeR</a></li>
          <li><a href="https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0">Github Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:tunnel-agent:20170305">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">MPL-2.0 license</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Module:

                              symbol
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:npm:symbol:MPL-2.0">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Directory Traversal</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              st
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and st@0.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version 0.2.5 or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/isaacs/st#security-status">https://github.com/isaacs/st#security-status</a></li>
          <li><a href="http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers">http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20140206">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Open Redirect</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              st
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and st@0.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20171013">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              semver
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, npmconf@0.0.24 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Update to a version 4.3.2 or greater. From the issue description [2]: &quot;Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service.&quot;</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/npm/npm/releases/tag/v2.7.5">GitHub Release</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:semver:20150403">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Remote Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              request
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>request</code> to version 2.68.0 or higher.</p>
          <p>If a direct dependency update is not possible, use <a href="https://snyk.io/docs#wizard"><code>snyk wizard</code></a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/request/request/pull/2018">GitHub PR</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:request:20160119">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-web
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to version 3.2.14, 4.1.7 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://pivotal.io/security/cve-2015-3192">Pivotal Security</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30164">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Reflected File Download</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-web
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to version 4.2.1.RELEASE, 4.1.7.RELEASE, 4.0.9.RELEASE, 3.2.14.RELEASE or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://pivotal.io/security/cve-2015-5211">Pivotal Security</a></li>
          <li><a href="https://access.redhat.com/security/cve/cve-2015-5211">Redhat Bugzilla</a></li>
          <li><a href="https://www.trustwave.com/Resources/SpiderLabs-Blog/Reflected-File-Download---A-New-Web-Attack-Vector/">Oren Hafif Blog</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30165">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-web
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31331">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Authentication Bypass</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-web
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no fix version for <code>org.springframework:spring-web</code>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/spring-projects/spring-security/issues/3392">GitHub Issue</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31644">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Directory Traversal</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-core</code> to version 3.2.9, 4.0.5 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/spring-projects/spring-framework/commit/e3e71ba92a8b82dadf474eda76cd2741f65a77a8">GitHub Commit</a></li>
          <li><a href="https://pivotal.io/security/cve-2014-3578">Pivotal Security</a></li>
          <li><a href="https://jira.spring.io/browse/SPR-12354">Jira Issue</a></li>
          <li><a href="http://jvndb.jvn.jp/en/contents/2014/JVNDB-2014-000054.html">JVNDB</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1131882">Redhat Bugzilla</a></li>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3578">NVD</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31325">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">JSM bypass via ReflectionHelper</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.hibernate:hibernate-validator
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGHIBERNATE-30098">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Dual license: EPL-1.0, EPL-1.0</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:

                              org.hibernate.javax.persistence:hibernate-jpa-2.1-api
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.hibernate.javax.persistence:hibernate-jpa-2.1-api:(EPL-1.0_OR_EPL-1.0)">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">EPL-1.0 license</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:

                              org.aspectj:aspectjweaver
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.aspectj:aspectjweaver:EPL-1.0">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30773">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30774">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Access Restriction Bypass</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30775">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Access Restriction Bypass</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30776">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30777">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-050.html">Struts Security Bulletin</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31501">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-051.html">Struts Security Bulletin</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31502">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Arbitrary Code Execution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.12</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-053">Apache Security Bulletin</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31503">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30800">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Improper Input Validation</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30801">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Improper Input Validation</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30802">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Improper Input Validation</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts.xwork:xwork-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30804">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ognl:ognl
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ognl:ognl</code> to version 3.0.12 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3093">NVD</a></li>
          <li><a href="https://github.com/jkuhnert/ognl/commit/ae43073fbf38db8371ff4f8bf2a966ee3b5f7e92">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-OGNL-30474">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ms
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, humanize-ms@1.0.1 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 0.7.1.</p>
          <p>If direct dependency upgrade is not possible, use <a href="https://snyk.io/docs/using-snyk#wizard">snyk wizard</a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">OWASP - ReDoS</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20151024">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Remote Memory Exposure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mongoose
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and mongoose@4.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mongoose</code> to version &gt;= 3.8.39 or &gt;= 4.3.6.</p>
          <p>If a direct dependency update is not possible, use <a href="https://snyk.io/docs/using-snyk#wizard"><code>snyk wizard</code></a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/Automattic/mongoose/issues/3764">GitHub Issue</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mongoose:20160116">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              moment
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and moment@2.15.1

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20161019">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              marked
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and marked@0.3.5

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/926">GitHub Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815-1">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              jquery
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and jquery@2.2.4

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>jquery</code> to version <code>3.0.0</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jquery/jquery/issues/2432">GitHub Issue</a></li>
          <li><a href="https://github.com/jquery/jquery/pull/2588">GitHub PR</a></li>
          <li><a href="https://github.com/jquery/jquery/pull/2588/commits/c254d308a7d3f1eac4d0b42837804cfffcba4bb2">GitHub Commit 3.0.0</a></li>
          <li><a href="https://github.com/jquery/jquery/commit/f60729f3903d17917dc351f3ac87794de379b0cc">GitHub Commit 1.12</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:jquery:20150627">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Timing Attack</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              http-signature
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>http-signature</code> to version 1.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/joyent/node-http-signature/pull/36">Github PR</a></li>
          <li><a href="https://github.com/joyent/node-http-signature/commit/78ab1da232f31f695f5c362d863593a143aa8b56">Github Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:http-signature:20150122">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Cross-site Scripting (XSS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ejs
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and ejs@1.0.0

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130-1">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Insecure Randomness</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              cryptiles
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version 4.1.2 and higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/hapijs/cryptiles/issues/34">GitHub Issue</a></li>
          <li><a href="https://github.com/hapijs/cryptiles/commit/9332d4263a32b84e76bf538d7470d01ea63fa047">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:cryptiles:20180710">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Information Disclosure</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              commons-fileupload:commons-fileupload
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload</code> to version 1.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L56">Github ChangeLog</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/commit/5b4881d7f75f439326f54fa554a9ca7de6d60814">Github Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-31540">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <div class="card__section">
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              brace-expansion
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>brace-expansion</code> to version 1.1.7 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/juliangruber/brace-expansion/pull/35">GitHub PR</a></li>
          <li><a href="https://github.com/juliangruber/brace-expansion/issues/33">GitHub Issue</a></li>
          <li><a href="https://github.com/juliangruber/brace-expansion/pull/35/commits/b13381281cead487cbdbfd6a69fb097ea5e456c3">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:brace-expansion:20170302">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">XML External Entity (XXE) Injection</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.springframework:spring-web
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to versions 3.2.8, 4.0.4 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://www.gopivotal.com/security/cve-2014-0225">Pivotal Security</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0225">Redhat Bugzilla</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30163">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Manipulation of Struts&#x27; internals</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              org.apache.struts:struts2-core
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30060">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              ms
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, mongoose@4.2.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 2.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/zeit/ms/pull/89">GitHub PR</a></li>
          <li><a href="https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20170412">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              moment
                      </li>

                      <li class="card__meta__item">Introduced through:

                                  goof@0.0.3 and moment@2.15.1

                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>moment</code> to version <code>2.19.3</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/moment/moment/issues/4163">GitHub Issue</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20170905">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              mime
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mime</code> to versions 1.4.1, 2.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/broofa/node-mime/issues/167">Github Issue</a></li>
          <li><a href="https://github.com/broofa/node-mime/commit/855d0c4b8b22e4a80b9401a81f2872058eae274d">Github Commit 1.x</a></li>
          <li><a href="https://github.com/broofa/node-mime/commit/1df903fdeb9ae7eaa048795b8d580ce2c98f40b0">Github Commit 2.0.x</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mime:20170907">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Prototype Pollution</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              hoek
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>hoek</code> to versions 4.2.1, 5.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://hackerone.com/reports/310439">HackerOne Report</a></li>
          <li><a href="https://github.com/hapijs/hoek/pull/227">GitHub PR</a></li>
          <li><a href="https://github.com/hapijs/hoek/issues/230">GitHub Issue - 4.2.1 Backport</a></li>
          <li><a href="https://github.com/hapijs/hoek/commit/32ed5c9413321fbc37da5ca81a7cbab693786dee">GitHub Commit 5.0.3</a></li>
          <li><a href="https://github.com/hapijs/hoek/commit/5aed1a8c4a3d55722d1c799f2368857bf418d6df">GitHub Commit 4.2.x</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:hoek:20180212">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              hawk
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:hawk:20160119">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              debug
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>debug</code> to version 2.6.9, 3.1.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/visionmedia/debug/issues/501">GitHub Issue</a></li>
          <li><a href="https://github.com/visionmedia/debug/pull/504">GitHub PR</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:debug:20170905">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              bson
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, mongoose@4.2.4 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>bson</code> to version 1.0.5 or higher</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/mongodb/js-bson/commit/bd61c45157c53a1698ff23770160cf4783e9ea4a">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:bson:20180225">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <div class="card__section">
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
                  <div class="card--title">
                      <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
                  </div>

                  <hr/>

                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:

                              braces
                      </li>

                      <li class="card__meta__item">Introduced through:


                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>

                  <hr/>


              </div><!-- .card__section -->

                  <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>braces</code> to version 2.3.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/micromatch/braces/commit/abdafb0cae1e0c00f184abbadc692f4eaa98f451">GitHub Commit</a></li>
          </ul>


              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:braces:20180219">More about this vulnerability</a></p>
              </div>

          </div><!-- .card -->
        </div><!-- cards -->
      </div>
    </div><!-- .layout-container -->

  </main><!-- .layout-stacked__content -->
</body>

</html>

`
