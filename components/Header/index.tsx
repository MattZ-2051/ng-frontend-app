import Image from 'next/image'
import ngLogo from '@/assets/ng-logo.png'
export default function Header() {
    return (
        <div>
            <Image src={ngLogo} height={34} width={319} alt="" />
        </div>
    )
}
