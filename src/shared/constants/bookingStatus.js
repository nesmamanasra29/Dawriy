export const BOOKING_STATUS = {
  WAITING: 'waiting',
  CALLED: 'called',
  SERVING: 'serving',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  DELAYED: 'delayed',
  NO_SHOW: 'no_show',
};

export const BOOKING_STATUS_META = {
  [BOOKING_STATUS.WAITING]: {
    label: 'بانتظار الدور',
    variant: 'warning',
  },
  [BOOKING_STATUS.CALLED]: {
    label: 'تم النداء',
    variant: 'info',
  },
  [BOOKING_STATUS.SERVING]: {
    label: 'قيد الخدمة',
    variant: 'success',
  },
  [BOOKING_STATUS.COMPLETED]: {
    label: 'مكتمل',
    variant: 'success',
  },
  [BOOKING_STATUS.CANCELLED]: {
    label: 'ملغي',
    variant: 'danger',
  },
  [BOOKING_STATUS.DELAYED]: {
    label: 'مؤجل',
    variant: 'warning',
  },
  [BOOKING_STATUS.NO_SHOW]: {
    label: 'لم يحضر',
    variant: 'danger',
  },
};

export const BOOKING_ALLOWED_TRANSITIONS = {
  [BOOKING_STATUS.WAITING]: [
    BOOKING_STATUS.CALLED,
    BOOKING_STATUS.CANCELLED,
    BOOKING_STATUS.DELAYED,
  ],
  [BOOKING_STATUS.CALLED]: [
    BOOKING_STATUS.SERVING,
    BOOKING_STATUS.NO_SHOW,
    BOOKING_STATUS.CANCELLED,
  ],
  [BOOKING_STATUS.SERVING]: [BOOKING_STATUS.COMPLETED],
  [BOOKING_STATUS.DELAYED]: [
    BOOKING_STATUS.WAITING,
    BOOKING_STATUS.CANCELLED,
  ],
  [BOOKING_STATUS.COMPLETED]: [],
  [BOOKING_STATUS.CANCELLED]: [],
  [BOOKING_STATUS.NO_SHOW]: [],
};