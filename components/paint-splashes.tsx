"use client"

// Colorful paint splash with drips and splatters
export function PaintSplash1({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M100,40 C130,35 155,50 160,75 C175,85 180,110 170,130 C180,145 175,170 155,175 C150,190 130,195 110,190 C90,200 65,195 55,180 C35,180 25,160 30,140 C15,125 20,100 40,85 C35,65 50,45 75,42 C85,35 95,38 100,40 Z"
        fill="#FF6B6B"
      />
      {/* Drips */}
      <path d="M155,175 Q160,195 155,210 Q152,218 148,210 Q145,195 150,175" fill="#FF6B6B" />
      <path d="M60,178 Q58,200 55,215 Q53,220 50,212 Q48,198 55,178" fill="#FF6B6B" />
      <path d="M130,190 Q133,205 130,220 Q128,225 125,218 Q123,203 128,190" fill="#FF6B6B" />
      {/* Small splatters */}
      <circle cx="180" cy="95" r="6" fill="#FF6B6B" />
      <circle cx="185" cy="115" r="4" fill="#FF6B6B" />
      <circle cx="20" cy="100" r="5" fill="#FF6B6B" />
      <circle cx="12" cy="120" r="3" fill="#FF6B6B" />
      <circle cx="175" cy="70" r="4" fill="#FF6B6B" />
      <circle cx="30" cy="70" r="5" fill="#FF6B6B" />
      <circle cx="90" cy="30" r="4" fill="#FF6B6B" />
      <circle cx="115" cy="25" r="3" fill="#FF6B6B" />
    </svg>
  )
}

export function PaintSplash2({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M95,50 C125,40 150,55 155,80 C170,90 175,115 165,135 C175,155 165,175 145,180 C140,195 115,200 95,195 C70,200 50,185 50,165 C30,155 30,130 45,115 C35,95 50,70 75,60 C80,50 90,48 95,50 Z"
        fill="#4ECDC4"
      />
      {/* Drips */}
      <path d="M145,180 Q148,200 145,218 Q143,222 140,215 Q138,198 143,180" fill="#4ECDC4" />
      <path d="M55,165 Q52,185 50,205 Q48,210 45,202 Q44,185 52,165" fill="#4ECDC4" />
      <path d="M95,195 Q97,210 95,220 Q93,225 90,218 Q89,208 93,195" fill="#4ECDC4" />
      {/* Small splatters */}
      <circle cx="175" cy="85" r="5" fill="#4ECDC4" />
      <circle cx="182" cy="105" r="3" fill="#4ECDC4" />
      <circle cx="25" cy="115" r="5" fill="#4ECDC4" />
      <circle cx="18" cy="135" r="3" fill="#4ECDC4" />
      <circle cx="170" cy="60" r="4" fill="#4ECDC4" />
      <circle cx="85" cy="35" r="4" fill="#4ECDC4" />
      <circle cx="110" cy="30" r="3" fill="#4ECDC4" />
    </svg>
  )
}

export function PaintSplash3({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M100,45 C135,38 160,55 165,85 C180,95 185,125 172,150 C182,170 170,190 148,195 C140,210 115,215 90,205 C65,215 40,200 38,175 C20,165 18,135 35,115 C25,90 45,60 75,52 C82,42 92,42 100,45 Z"
        fill="#FFE66D"
      />
      {/* Drips */}
      <path d="M148,195 Q152,215 148,235 Q145,240 142,232 Q140,212 146,195" fill="#FFE66D" />
      <path d="M40,175 Q36,200 35,220 Q33,225 30,218 Q29,198 38,175" fill="#FFE66D" />
      <path d="M90,205 Q92,225 88,240 Q86,245 83,238 Q82,222 88,205" fill="#FFE66D" />
      {/* Small splatters */}
      <circle cx="188" cy="100" r="6" fill="#FFE66D" />
      <circle cx="192" cy="125" r="4" fill="#FFE66D" />
      <circle cx="15" cy="120" r="5" fill="#FFE66D" />
      <circle cx="8" cy="145" r="3" fill="#FFE66D" />
      <circle cx="180" cy="70" r="4" fill="#FFE66D" />
      <circle cx="25" cy="85" r="4" fill="#FFE66D" />
      <circle cx="105" cy="28" r="4" fill="#FFE66D" />
      <circle cx="130" cy="32" r="3" fill="#FFE66D" />
    </svg>
  )
}

export function PaintSplash4({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M98,48 C130,42 158,58 162,88 C178,98 182,128 170,152 C180,172 168,192 146,196 C138,212 112,218 88,208 C62,218 38,202 36,176 C18,166 16,134 34,114 C24,90 44,58 74,50 C82,42 92,44 98,48 Z"
        fill="#C490E4"
      />
      {/* Drips */}
      <path d="M146,196 Q150,218 146,238 Q143,243 140,235 Q138,215 144,196" fill="#C490E4" />
      <path d="M38,176 Q34,198 32,218 Q30,223 27,215 Q26,196 36,176" fill="#C490E4" />
      <path d="M110,210 Q113,228 110,242 Q108,247 105,240 Q103,225 108,210" fill="#C490E4" />
      {/* Small splatters */}
      <circle cx="185" cy="105" r="5" fill="#C490E4" />
      <circle cx="190" cy="128" r="4" fill="#C490E4" />
      <circle cx="12" cy="118" r="5" fill="#C490E4" />
      <circle cx="6" cy="140" r="3" fill="#C490E4" />
      <circle cx="178" cy="72" r="4" fill="#C490E4" />
      <circle cx="20" cy="90" r="5" fill="#C490E4" />
      <circle cx="90" cy="32" r="4" fill="#C490E4" />
    </svg>
  )
}

export function PaintSplash5({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M102,45 C135,38 162,56 166,86 C182,96 186,126 174,150 C184,170 172,192 150,196 C142,212 116,218 92,208 C66,218 42,202 40,176 C22,166 20,134 38,114 C28,90 48,58 78,50 C86,42 96,44 102,45 Z"
        fill="#7BC043"
      />
      {/* Drips */}
      <path d="M150,196 Q154,218 150,238 Q147,243 144,235 Q142,215 148,196" fill="#7BC043" />
      <path d="M42,176 Q38,198 36,218 Q34,223 31,215 Q30,196 40,176" fill="#7BC043" />
      <path d="M92,208 Q94,225 91,240 Q89,245 86,238 Q85,222 90,208" fill="#7BC043" />
      {/* Small splatters */}
      <circle cx="188" cy="102" r="5" fill="#7BC043" />
      <circle cx="194" cy="125" r="4" fill="#7BC043" />
      <circle cx="15" cy="118" r="5" fill="#7BC043" />
      <circle cx="8" cy="142" r="3" fill="#7BC043" />
      <circle cx="180" cy="68" r="4" fill="#7BC043" />
      <circle cx="22" cy="88" r="5" fill="#7BC043" />
      <circle cx="108" cy="30" r="4" fill="#7BC043" />
      <circle cx="130" cy="35" r="3" fill="#7BC043" />
    </svg>
  )
}

export function PaintSplash6({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main splash body */}
      <path 
        d="M100,48 C132,40 158,58 163,88 C180,98 184,128 172,152 C182,172 170,192 148,196 C140,212 114,218 90,208 C64,218 40,202 38,176 C20,166 18,134 36,114 C26,90 46,58 76,50 C84,42 94,46 100,48 Z"
        fill="#3498DB"
      />
      {/* Drips */}
      <path d="M148,196 Q152,218 148,238 Q145,243 142,235 Q140,215 146,196" fill="#3498DB" />
      <path d="M40,176 Q36,198 34,218 Q32,223 29,215 Q28,196 38,176" fill="#3498DB" />
      <path d="M115,210 Q118,228 115,242 Q113,247 110,240 Q108,225 113,210" fill="#3498DB" />
      {/* Small splatters */}
      <circle cx="186" cy="104" r="5" fill="#3498DB" />
      <circle cx="192" cy="128" r="4" fill="#3498DB" />
      <circle cx="14" cy="118" r="5" fill="#3498DB" />
      <circle cx="6" cy="142" r="3" fill="#3498DB" />
      <circle cx="180" cy="70" r="4" fill="#3498DB" />
      <circle cx="20" cy="88" r="5" fill="#3498DB" />
      <circle cx="95" cy="32" r="4" fill="#3498DB" />
      <circle cx="120" cy="28" r="3" fill="#3498DB" />
    </svg>
  )
}

// Small drip accent
export function PaintDrip({ className = "", color = "#FF6B6B" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 30 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15,0 C20,5 22,15 20,30 C23,40 22,55 18,65 C16,72 15,78 15,80 C15,78 14,72 12,65 C8,55 7,40 10,30 C8,15 10,5 15,0 Z"
        fill={color}
      />
      <circle cx="15" cy="3" r="3" fill={color} />
    </svg>
  )
}

// Splatter dots group
export function PaintSplatters({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="12" fill="#FF6B6B" />
      <circle cx="28" cy="35" r="6" fill="#4ECDC4" />
      <circle cx="72" cy="32" r="8" fill="#FFE66D" />
      <circle cx="78" cy="58" r="5" fill="#C490E4" />
      <circle cx="65" cy="75" r="7" fill="#7BC043" />
      <circle cx="35" cy="72" r="5" fill="#3498DB" />
      <circle cx="22" cy="55" r="4" fill="#FF6B6B" />
      <circle cx="45" cy="25" r="4" fill="#4ECDC4" />
      <circle cx="85" cy="42" r="3" fill="#FFE66D" />
      <circle cx="15" cy="42" r="3" fill="#C490E4" />
    </svg>
  )
}
