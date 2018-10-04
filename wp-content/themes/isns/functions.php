<?php
/**
 * isns functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package isns
 */

if ( ! function_exists( 'isns_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function isns_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on isns, use a find and replace
		 * to change 'isns' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'isns', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'isns' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'isns_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'isns_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function isns_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'isns_content_width', 640 );
}
add_action( 'after_setup_theme', 'isns_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function isns_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'isns' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'isns' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'isns_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function isns_scripts() {
	wp_enqueue_style( 'isns-settings', get_template_directory_uri() . '/css/settings.css' );
	wp_enqueue_style( 'isns-rev', get_template_directory_uri() . '/css/settings-rev.css' );
	wp_enqueue_style( 'isns-icons', get_template_directory_uri() . '/css/trx_addons_icons-embedded.min.css' );
	wp_enqueue_style( 'isns-swiper', get_template_directory_uri() . '/css/swiper.min.css' );
	wp_enqueue_style( 'isns-magnific', get_template_directory_uri() . '/css/magnific-popup.min.css' );
	wp_enqueue_style( 'isns-trx_addons', get_template_directory_uri() . '/css/trx_addons.css' );
	wp_enqueue_style( 'isns-trx_addons_animation', get_template_directory_uri() . '/css/trx_addons.animation.min.css' );
	wp_enqueue_style( 'isns-composer', get_template_directory_uri() . '/css/js_composer.min.css?ver=5.4.5' );
	wp_enqueue_style( 'isns-fontello', get_template_directory_uri() . '/css/fontello-embedded.css' );
	wp_enqueue_style( 'isns-styles', get_template_directory_uri() . '/css/__styles.css' );
	wp_enqueue_style( 'isns-styles-2', get_template_directory_uri() . '/css/style.css' );
	wp_enqueue_style( 'isns-theme', get_template_directory_uri() . '/css/theme.css' );
	wp_enqueue_style( 'isns-colors', get_template_directory_uri() . '/css/__colors.css' );
	wp_enqueue_style( 'isns-player', get_template_directory_uri() . '/css/mediaelementplayer-legacy.min.css?ver=4.2.6-78496d1' );
	wp_enqueue_style( 'isns-mediaelement', get_template_directory_uri() . '/css/wp-mediaelement.min.css?ver=4.9.8' );

	wp_enqueue_style( 'isns-responsive', get_template_directory_uri() . '/css/responsive.css' );
	wp_enqueue_style( 'isns-style', get_stylesheet_uri() );

	wp_enqueue_script( 'isns-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'isns-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );


	wp_enqueue_script( 'isns-jquery', get_template_directory_uri() . '/js/jquery.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-jquery-migrate', get_template_directory_uri() . '/js/jquery-migrate.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-lightbox', get_template_directory_uri() . '/js/lightbox.js?ver=2.1.0.2', array(), '20151215', true );
	wp_enqueue_script( 'isns-themepunch', get_template_directory_uri() . '/js/jquery.themepunch.tools.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-revolution', get_template_directory_uri() . '/js/jquery.themepunch.revolution.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-player', get_template_directory_uri() . '/js/mediaelement-and-player.min.js?ver=4.2.6-78496d1', array(), '20151215', true );
	wp_enqueue_script( 'isns-migrate', get_template_directory_uri() . '/js/mediaelement-migrate.min.js?ver=4.9.8', array(), '20151215', true );

	wp_enqueue_script( 'isns-slideanims', get_template_directory_uri() . '/js/revolution.extension.slideanims.min.js', array(), '20151215', true );

	wp_enqueue_script( 'isns-actions', get_template_directory_uri() . '/js/revolution.extension.actions.min.js', array(), '20151215', true );

	wp_enqueue_script( 'isns-layeranimation', get_template_directory_uri() . '/js/revolution.extension.layeranimation.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-kenburn', get_template_directory_uri() . '/js/revolution.extension.kenburn.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-navigation', get_template_directory_uri() . '/js/revolution.extension.navigation.min.js', array(), '20151215', true );

	wp_enqueue_script( 'isns-swiper', get_template_directory_uri() . '/js/swiper.jquery.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-magnific-popup', get_template_directory_uri() . '/js/jquery.magnific-popup.min.js', array(), '20151215', true );

	wp_enqueue_script( 'isns-trx_addons', get_template_directory_uri() . '/js/trx_addons.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-superfish', get_template_directory_uri() . '/js/superfish.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-superfish', get_template_directory_uri() . '/js/__scripts.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-mediaelement', get_template_directory_uri() . '/js/wp-mediaelement.min.js?ver=4.9.8', array(), '20151215', true );

	wp_enqueue_script( 'isns-embed', get_template_directory_uri() . '/js/wp-embed.min.js?ver=4.9.8', array(), '20151215', true );
	wp_enqueue_script( 'isns-js_composer_front', get_template_directory_uri() . '/js/js_composer_front.min.js?ver=5.4.5', array(), '20151215', true );
	wp_enqueue_script( 'isns-chart', get_template_directory_uri() . '/js/chart.min.js', array(), '20151215', true );
	wp_enqueue_script( 'isns-forms-api', get_template_directory_uri() . '/js/forms-api.min.js?ver=4.1.14', array(), '20151215', true );


















	wp_enqueue_script( 'isns-custom', get_template_directory_uri() . '/js/custom.js', array(), '20151215', true );






	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'isns_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

