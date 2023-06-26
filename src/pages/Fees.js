import { Container } from "../GlobalStyle";
import "./fees.scss";
import i18n from '../components/i18n';
import { useTranslation, Trans } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb'

const Fees = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Breadcrumb />
        <h1>{t('Fees')}</h1>
        <h2>Physiotherapy Consultation Fees</h2>
        <div className="table_wrapper">
          <table>
            <thead>
              <tr>
                <th>Consultation</th>
                <th>Time</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Consultation</td>
                <td>60 min</td>
                <td>$1500</td>
              </tr>
              <tr>
                <td>Follow-up Consultation</td>
                <td>40 min</td>
                <td>$1200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Physiotherapy Program Fees</h2>
        <div className="table_wrapper">
          <table>
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
                <td>Intensive</td>
                <td>
                  <ul>
                    <li>For clients who need more than one session per week</li>
                    <li>Unlimited physiotherapy throughout the week</li>
                  </ul>
                </td>
                <td>40-60 min</td>
                <td>$2500 per week</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>
                  <ul>
                    <li>For wellness and maintenance</li>
                    <li>For existing clients who have recurrent episodes</li>
                    <li>For clients who have tightness/stiffness</li>
                  </ul>
                </td>
                <td>20-40 min</td>
                <td>
                  <ul>
                    <li>$900 per session</li>
                    <li>$4500 per 6 sessions</li>
                    <li>$9000 per 13 sessions</li>
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