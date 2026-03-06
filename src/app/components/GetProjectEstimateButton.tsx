import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type GetProjectEstimateButtonProps = {
  className: string;
  label?: string;
  to?: string;
  after?: ReactNode;
};

export function GetProjectEstimateButton({
  className,
  label = 'Get Project Estimate',
  to = '/get-estimate',
  after,
}: GetProjectEstimateButtonProps) {
  return (
    <Link to={to} className={className}>
      {label}
      {after}
    </Link>
  );
}

type RouteButtonProps = {
  className: string;
  label?: string;
  after?: ReactNode;
  onClick?: () => void;
};

export function BookStrategyCallButton({
  className,
  label = 'Book Strategy Call',
  after,
  onClick,
}: RouteButtonProps) {
  return (
    <Link to="/book-strategy-call" onClick={onClick} className={className}>
      {label}
      {after}
    </Link>
  );
}

export function BecomePartnerButton({
  className,
  label = 'Become a Partner',
  after,
  onClick,
}: RouteButtonProps) {
  return (
    <Link to="/become-partner" onClick={onClick} className={className}>
      {label}
      {after}
    </Link>
  );
}

type CareerApplyNowButtonProps = {
  className: string;
  positionTitle: string;
  role?: unknown;
  label?: string;
  after?: ReactNode;
};

export function CareerApplyNowButton({
  className,
  positionTitle,
  role,
  label = 'Apply Now',
  after,
}: CareerApplyNowButtonProps) {
  return (
    <Link
      to={`/careers/apply?position=${encodeURIComponent(positionTitle)}`}
      state={{ roleTitle: positionTitle, role }}
      className={className}
    >
      {label}
      {after}
    </Link>
  );
}

type CareerViewDetailsButtonProps = {
  className: string;
  slug: string;
  role?: unknown;
  label?: string;
  after?: ReactNode;
};

export function CareerViewDetailsButton({
  className,
  slug,
  role,
  label = 'View Details',
  after,
}: CareerViewDetailsButtonProps) {
  return (
    <Link to={`/careers/${slug}`} state={{ role }} className={className}>
      {label}
      {after}
    </Link>
  );
}
