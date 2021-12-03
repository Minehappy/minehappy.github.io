<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'minehappy.github.io_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7<FQAn9Lyp.ez+4WTdmq+F>=)c4vwKO4vPA|8r4>,8>8-_zh!R=(7?OB?pK$U.Md' );
define( 'SECURE_AUTH_KEY',  ';NeX7M V/bC!RK%eg:rS?N:uQ!|Ui77^Z0`?*sP mmEHpM7XuvtO_l{jbU,iU@0d' );
define( 'LOGGED_IN_KEY',    '~n-9_IeK ))[Zy74~y7t2`i2ASQreb>5>5<7kfd.vd)rSaEj@<nz}|[@z1I2< 3)' );
define( 'NONCE_KEY',        'WaUbivt0YGI[8llOuY T^O-GWti MYkG2X}WyAM*a@B M#Vo3umI(18Xus?:.^{M' );
define( 'AUTH_SALT',        'PS{N<j7e4`WhN=u6%)*`;3~?x;BN5p6em,b*rW`AZCWqI[i=.BKVu#>wY3+O1e(+' );
define( 'SECURE_AUTH_SALT', 'J[83~}2x}P>fMAuO^Ww>HxV%&!ZkG581k<]`_qT,mX)RyNP>5!3Y~:]5tZ2Sp7<f' );
define( 'LOGGED_IN_SALT',   '3QYO2ZrbF+cI.u* DIoDwx8(gQ`t9JF$9_0QM sh .:(=nIyWcR-q9$~wunp0#Vj' );
define( 'NONCE_SALT',       'sJtG:/0slW|>0j<N9vjPUH6B~3< ob=.h$IdV|*t24m:/#:(xTd@EhJR*RVb9%aZ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
