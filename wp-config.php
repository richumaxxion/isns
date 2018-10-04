<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'isnswp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Vx/sq26f-~[[1il9)Qf(@3O!.jxeqST#9N<Q*~_=-Mf#3:C2l|2k-7}g=xP`y&s$');
define('SECURE_AUTH_KEY',  'q]?h^FGo5_%q,,s*G<hwZ+f&XOx`5j]Y+%J.[!kp7eDvUHU;-FdBoXAk`t:]N4L)');
define('LOGGED_IN_KEY',    'Qfu3Ea2>6L9~c@BEGow;DSA94RHCz2lb/To2{P,84@P?D7T-#<#6KbXF$o|ccN#u');
define('NONCE_KEY',        '`)]z1n^Vw}~J<_g=bU?(P/Q.URzA{5FqBqp( ;g4d<l;;eC,XGW0*k]>AcV+JVl4');
define('AUTH_SALT',        'K:P,v{V{Lb9q6XP+HXp8CH;?aG9mmp#)zg!Vc^x5G(}RFQf$k|n+#apFGF|8](1*');
define('SECURE_AUTH_SALT', '8>nLyIB^C60Y=o>s?>C{*P<aGM 41|ciqu?80t1e1iL&L)S3WIh<swPl1z|Q3w)i');
define('LOGGED_IN_SALT',   'pFOIsJ3,P-{LBS}0r^U2Ngt;QkPSp?,_46h1Tx&7,uhpzrpBur4rDl(gT4c5*-FJ');
define('NONCE_SALT',       'EgU+N-J<Jq1?OCY2yaKOk5.u]ERpJ<cLwh_i~zI0O$E`uY(M_Zu~S6T2<2yYFmOp');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_isns_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
