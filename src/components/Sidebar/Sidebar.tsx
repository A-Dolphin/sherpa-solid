import { A } from "@solidjs/router";
import './Sidebar.scss'
 
export default function Sidebar() {

  const userName = 'A Dolphin';
  const userRole = 'Owner'
    return (
      <aside>
        <div class="sidebar-top">

        </div>
        <div class="user">
          <img src="/pp.png" class="user-profile-image"></img>
          <div>
            <span class="bold">{userName}&nbsp{userRole}</span>
          </div>
        </div>
        <ul>
          <li>
            <A href="/">
              Clients
              <ion-icon name="people-outline" />
            </A>
          </li>
          <li>
            <A href="/bookings">
              Bookings
              <ion-icon name="calendar-outline" />
            </A>
          </li>          
          <li>
            <A href="/billing">
              Billing
              <ion-icon name="card-outline" />
            </A>
          </li>          
          <li>
            <A href="/analytics">
              Analytics
              <ion-icon name="analytics-outline" />
            </A>
          </li>
          <li>
            <A href="/marketing">
              Marketing
              <ion-icon name="flag-outline" />
              <ion-icon name="easel-outline" />
            </A>
          </li>
          <li>
            <A href="/marketing">
              Logout
              <ion-icon name="log-out-outline" />
            </A>
          </li>
        </ul>
      </aside>
    );
  }
