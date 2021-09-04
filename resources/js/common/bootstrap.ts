/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import Axios from 'axios'

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Axios.defaults.headers.withCredentials = true

document.body.removeAttribute('r-load')