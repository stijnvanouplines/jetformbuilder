const { __ } = wp.i18n;

export default {
	name: 'register_user',
	title: __( 'Register User', 'jet-form-builder' ),
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M32 28C31.4477 28 31 28.4477 31 29V31H29C28.4477 31 28 31.4477 28 32C28 32.5523 28.4477 33 29 33H31V35C31 35.5523 31.4477 36 32 36C32.5523 36 33 35.5523 33 35V33H35C35.5523 33 36 32.5523 36 32C36 31.4477 35.5523 31 35 31H33V29C33 28.4477 32.5523 28 32 28Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M25.3027 27.6227C24.9834 27.5003 24.8026 27.3845 24.7072 27.2891C24.2501 26.8318 24.0892 26.4008 24.0318 25.8957C27.1814 25.2836 29 21.9956 29 18.9926L29 18.8929C29.0001 17.4806 29.0001 16.4097 28.8614 15.577C28.7049 14.6375 28.3659 13.9425 27.7072 13.2837C26.8574 12.4335 25.4526 11.6321 24.8214 11.2916L24.0627 9.01449C23.8609 8.409 23.2786 7.96465 22.5863 8.00277C21.946 8.03803 20.5966 8.16364 19.1161 8.62065C17.645 9.07477 15.9523 9.88447 14.7317 11.3498C12.9813 13.451 12.9894 15.7657 12.9986 18.4079C12.9993 18.601 13 18.796 13 18.9926C13 21.9956 14.8186 25.2836 17.9682 25.8957C17.9108 26.4008 17.7499 26.8318 17.2928 27.2891C17.2043 27.3776 17.002 27.5046 16.5958 27.6447C16.2031 27.7802 15.7235 27.8946 15.158 28.0203C15.0625 28.0415 14.9645 28.063 14.8643 28.085C13.8394 28.31 12.5881 28.5846 11.5526 29.1025C10.512 29.6231 9.6057 30.2018 8.96901 30.998C8.30377 31.8298 8 32.8117 8 33.9984V36.4996C8 37.328 8.67157 37.9996 9.5 37.9996H26.7079C28.1182 39.2446 29.9709 40 32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C29.1974 24 26.7315 25.4411 25.3027 27.6227ZM22.2927 10.0294C21.6709 10.0858 20.719 10.219 19.706 10.5317C18.428 10.9262 17.1445 11.578 16.2683 12.6299C14.9968 14.1564 14.9979 15.7494 14.9998 18.6379L15 18.9926C15 21.5216 16.5799 23.7403 18.6143 23.9731C19.3063 24.0523 20.0196 24.6348 19.995 25.5226C19.9682 26.488 19.7931 27.6167 18.7072 28.7031C18.2957 29.1148 17.748 29.3629 17.248 29.5354C16.7344 29.7126 16.1515 29.8483 15.592 29.9726L15.3351 30.0295C14.254 30.2685 13.2475 30.491 12.4474 30.8912C11.488 31.3711 10.8943 31.7927 10.531 32.2471C10.1962 32.6657 10 33.1844 10 33.9984V35.9996H25.07C24.3895 34.823 24 33.457 24 32C24 31.0991 24.1489 30.233 24.4235 29.4249C24.0212 29.2562 23.6187 29.0292 23.2928 28.7031C22.2069 27.6167 22.0318 26.488 22.005 25.5226C21.9804 24.6348 22.6937 24.0523 23.3857 23.9731C25.4201 23.7403 27 21.5216 27 18.9926C27 17.4531 26.9966 16.554 26.8886 15.9056C26.7951 15.3445 26.6341 15.0391 26.2928 14.6976C25.5989 14.0034 24.2493 13.2497 23.7174 12.9694C23.3781 12.7907 23.1115 12.4865 22.9858 12.1095L22.2927 10.0294ZM32 38C35.3137 38 38 35.3137 38 32C38 28.6863 35.3137 26 32 26C28.6863 26 26 28.6863 26 32C26 35.3137 28.6863 38 32 38Z"
		/>
	</svg>,
	actions: [
		{
			'type': 'verification',
			settings: {
				'mail_to': 'email',
			},
		},
		{
			'type': 'register_user',
			'settings': {
				'fields_map': {
					'email': 'email',
					'login': 'login',
					'password': '_jfb_verification_token',
					'confirm_password': '_jfb_verification_token',
				},
				'log_in': true,
			},
		},
	],
	blocks: [
		[
			'jet-forms/text-field',
			{
				'name': 'email',
				'label': 'Email',
				'field_type': 'email',
			},
		],
		[
			'jet-forms/text-field',
			{
				'name': 'login',
				'label': 'Login',
			},
		],
		[
			'jet-forms/submit-field',
		],
	],
	applyText: __(
		'3 blocks and Register User with Verification action have been added',
		'jet-form-builder',
	),
};