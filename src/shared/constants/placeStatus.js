export const PLACE_STATUS = {
  DRAFT: 'draft',
  PENDING: 'pending',
  APPROVED: 'approved',
  NEEDS_CHANGES: 'needs_changes',
  REJECTED: 'rejected',
  SUSPENDED: 'suspended',
};

export const PLACE_STATUS_META = {
  [PLACE_STATUS.DRAFT]: {
    label: 'مسودة',
    variant: 'neutral',
  },
  [PLACE_STATUS.PENDING]: {
    label: 'قيد المراجعة',
    variant: 'warning',
  },
  [PLACE_STATUS.APPROVED]: {
    label: 'مقبول ومنشور',
    variant: 'success',
  },
  [PLACE_STATUS.NEEDS_CHANGES]: {
    label: 'يحتاج تعديل',
    variant: 'warning',
  },
  [PLACE_STATUS.REJECTED]: {
    label: 'مرفوض',
    variant: 'danger',
  },
  [PLACE_STATUS.SUSPENDED]: {
    label: 'موقوف',
    variant: 'danger',
  },
};