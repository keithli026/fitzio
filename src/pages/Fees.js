import Container from "react-bootstrap/Container"
import { useTranslation, Trans } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'

const Fees = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container id="fee">
        <Breadcrumb />
        <h1>{t('Fees')}</h1>
        <h2>{t('Physiotherapy Consultation Fees')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Time</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consultation</td>
                <td>20 min</td>
                <td>$108</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Physiotherapy Program and Package Fees</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Program</th>
                <th>Description</th>
                <th>Time</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intensive Program</td>
                <td>
                  <ul>
                    <li>Unlimited physiotherapy throughout the week (up to 1 session daily for 7 days)</li>
                    <li>For client who needs multiple sessions per week due to severe pain</li>
                  </ul>
                </td>
                <td>20 min per session</td>
                <td>$298 per week</td>
              </tr>
              <tr>
                <td>Wellness Packages</td>
                <td>
                  <ul>
                    <li>No expiry date for the package</li>
                    <li>For client who needs ongoing physiotherapy</li>
                  </ul>
                </td>
                <td>20 min per session</td>
                <td>
                  <ul>
                    <li>$540 for 6 sessions</li>
                    <li>$1120 for 14 sessions</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default Fees;