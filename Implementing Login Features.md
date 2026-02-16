# Chat Conversation

Note: _This is purely the output of the chat conversation and does not contain any raw data, codebase snippets, etc. used to generate the output._

### User Input

<!-- Client Daily Workout Tracker -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Client Daily Workout Tracker</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112117",
                        "surface-dark": "#1a3224",
                        "surface-darker": "#162b1f",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #112117; 
        }
        ::-webkit-scrollbar-thumb {
            background: #244732; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #346548; 
        }
        .checkbox-custom {
            appearance: none;
            background-color: transparent;
            margin: 0;
            font: inherit;
            color: currentColor;
            width: 1.25em;
            height: 1.25em;
            border: 2px solid #346548;
            border-radius: 0.25em;
            display: grid;
            place-content: center;
        }
        .checkbox-custom::before {
            content: "";
            width: 0.65em;
            height: 0.65em;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em #19e66b;
            transform-origin: center;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }
        .checkbox-custom:checked::before {
            transform: scale(1);
        }
        .checkbox-custom:checked {
            border-color: #19e66b;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-hidden">
<!-- Top Sticky Header -->
<header class="sticky top-0 z-50 bg-[#112117]/95 backdrop-blur-sm border-b border-[#244732] px-6 py-4 flex items-center justify-between shrink-0">
<div class="flex items-center gap-4">
<button class="text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<div>
<h1 class="text-white text-xl font-bold tracking-tight">Upper Body Hypertrophy</h1>
<div class="flex items-center gap-2 text-[#93c8a8] text-sm">
<span class="material-symbols-outlined text-sm">schedule</span>
<span>Est. Time: 45 min</span>
</div>
</div>
</div>
<div class="flex items-center gap-6">
<!-- Session Timer -->
<div class="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1a3224] rounded-lg border border-[#244732]">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="font-mono text-primary font-medium text-lg tracking-widest">12:30</span>
</div>
<button aria-label="Close workout" class="text-gray-400 hover:text-red-400 transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto px-4 py-6 md:px-8 max-w-5xl mx-auto w-full space-y-8 scroll-smooth pb-32">
<!-- Progress Section -->
<section class="space-y-3">
<div class="flex justify-between items-end">
<div>
<h2 class="text-2xl font-bold text-white mb-1">Session Progress</h2>
<p class="text-[#93c8a8] text-sm">Keep pushing, you're doing great.</p>
</div>
<div class="text-right">
<span class="text-3xl font-bold text-primary">25%</span>
<p class="text-xs text-gray-400 uppercase tracking-wider">Completed</p>
</div>
</div>
<div class="h-3 w-full bg-[#1a3224] rounded-full overflow-hidden">
<div class="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(25,230,107,0.5)]" style="width: 25%"></div>
</div>
<div class="flex justify-between text-xs text-gray-500 font-medium uppercase tracking-wide">
<span>Start</span>
<span>3 of 8 Exercises</span>
<span>Finish</span>
</div>
</section>
<!-- Active Exercise Card -->
<article class="bg-[#1a3224] border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all">
<!-- Card Header -->
<div class="p-6 border-b border-[#244732] flex flex-col md:flex-row gap-6 md:items-start">
<div class="w-full md:w-32 h-32 shrink-0 rounded-lg bg-center bg-cover bg-no-repeat relative group overflow-hidden" data-alt="Man lifting barbell on bench press in dark gym" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXXtG8_PWSY8LBYsTQUScWYlENrt2TDsqyFennagDbEh6_I_HIF3ZyEhsQqr5g0oBtrDfRCziHkY2ZWldWfG67xutiR27FOX4qI46F4S8iMrPUulivMj4OgDi3Li-QgsOPgT0L1yhGAdNasaXHHnyIMr_6bljj_iIJCFTgr6b6Wlng_fQJQAlvDOBnsJJKtKk5p27U0UXJ4zfwMtnNCbqzaQeku4EtNOomTS8rjsmZKQRDFVpwt65J4A5hbfItEJbki9r5asXnouMn');">
<div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-white text-3xl">play_circle</span>
</div>
</div>
<div class="flex-1 space-y-2">
<div class="flex justify-between items-start">
<h3 class="text-2xl font-bold text-white">Barbell Bench Press</h3>
<button class="text-primary hover:text-white transition-colors p-1">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div class="flex flex-wrap gap-2 text-sm text-[#93c8a8]">
<span class="bg-[#244732] px-2 py-1 rounded">Chest</span>
<span class="bg-[#244732] px-2 py-1 rounded">Compound</span>
<span class="bg-[#244732] px-2 py-1 rounded">Barbell</span>
</div>
<div class="pt-2 text-sm text-gray-400 max-w-2xl">
                        Keep feet planted, arch back slightly, and lower bar to mid-chest. Explode up.
                    </div>
</div>
<div class="flex flex-col items-end justify-center bg-[#162b1f] p-4 rounded-lg border border-[#244732] min-w-[140px]">
<span class="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Target</span>
<span class="text-xl font-bold text-white">3 Sets</span>
<span class="text-sm text-[#93c8a8]">8-12 Reps</span>
</div>
</div>
<!-- Sets Input Table -->
<div class="p-4 md:p-6 bg-[#162b1f]/50">
<div class="overflow-x-auto">
<table class="w-full min-w-[600px] border-collapse">
<thead>
<tr>
<th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-4 pl-4 w-16">Set</th>
<th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-4 w-24">Prev</th>
<th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-4">Weight (kg)</th>
<th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-4">Reps</th>
<th class="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider pb-4 w-16">Done</th>
</tr>
</thead>
<tbody class="space-y-2">
<!-- Set 1 (Completed) -->
<tr class="group opacity-60">
<td class="py-3 pl-4">
<div class="flex items-center justify-center w-8 h-8 rounded-full bg-[#244732] text-primary font-bold text-sm">1</div>
</td>
<td class="py-3 text-sm text-gray-500">60kg x 12</td>
<td class="py-3 pr-4">
<input class="w-full bg-[#112117] border border-[#244732] text-white text-center rounded-lg py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono" disabled="" type="number" value="60"/>
</td>
<td class="py-3 pr-4">
<input class="w-full bg-[#112117] border border-[#244732] text-white text-center rounded-lg py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono" disabled="" type="number" value="12"/>
</td>
<td class="py-3 text-center">
<input checked="" class="checkbox-custom cursor-not-allowed mx-auto" disabled="" type="checkbox"/>
</td>
</tr>
<!-- Set 2 (Active) -->
<tr class="group relative">
<td class="py-3 pl-4 relative">
<div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r"></div>
<div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-black font-bold text-sm shadow-[0_0_10px_rgba(25,230,107,0.4)]">2</div>
</td>
<td class="py-3 text-sm text-gray-400">60kg x 12</td>
<td class="py-3 pr-4">
<input class="w-full bg-[#1a3224] border border-primary/50 text-white text-center rounded-lg py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono text-lg font-medium shadow-[0_0_15px_rgba(25,230,107,0.1)]" placeholder="60" type="number"/>
</td>
<td class="py-3 pr-4">
<input class="w-full bg-[#1a3224] border border-primary/50 text-white text-center rounded-lg py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono text-lg font-medium shadow-[0_0_15px_rgba(25,230,107,0.1)]" placeholder="12" type="number"/>
</td>
<td class="py-3 text-center">
<input class="checkbox-custom cursor-pointer mx-auto hover:border-primary transition-colors" type="checkbox"/>
</td>
</tr>
<!-- Set 3 (Pending) -->
<tr class="group">
<td class="py-3 pl-4">
<div class="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a3224] border border-[#244732] text-gray-500 font-bold text-sm">3</div>
</td>
<td class="py-3 text-sm text-gray-600">-</td>
<td class="py-3 pr-4">
<input class="w-full bg-transparent border border-[#244732] text-gray-400 text-center rounded-lg py-2 focus:bg-[#1a3224] focus:border-primary focus:text-white outline-none transition-all font-mono" placeholder="-" type="number"/>
</td>
<td class="py-3 pr-4">
<input class="w-full bg-transparent border border-[#244732] text-gray-400 text-center rounded-lg py-2 focus:bg-[#1a3224] focus:border-primary focus:text-white outline-none transition-all font-mono" placeholder="-" type="number"/>
</td>
<td class="py-3 text-center">
<input class="checkbox-custom cursor-pointer mx-auto opacity-50 hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
</tr>
</tbody>
</table>
</div>
<div class="mt-6 flex gap-4">
<button class="flex items-center gap-2 px-4 py-2 bg-[#244732] hover:bg-[#2d583e] text-[#93c8a8] hover:text-white text-sm font-medium rounded-lg transition-colors border border-transparent hover:border-primary/30">
<span class="material-symbols-outlined text-lg">add</span>
                        Add Set
                    </button>
<button class="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#244732] text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-colors border border-[#244732]">
<span class="material-symbols-outlined text-lg">history</span>
                        History
                    </button>
<button class="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#244732] text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-colors border border-[#244732] ml-auto">
<span class="material-symbols-outlined text-lg">sticky_note_2</span>
                        Add Note
                    </button>
</div>
</div>
</article>
<!-- Upcoming Exercises List -->
<div class="space-y-4">
<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider pl-1">Up Next</h3>
<!-- Exercise Card 2 (Collapsed/Pending) -->
<article class="bg-[#112117] border border-[#244732] rounded-xl p-4 flex items-center justify-between hover:border-[#346548] transition-colors cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-lg bg-center bg-cover bg-no-repeat opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Dumbbells on rack in dark gym background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd1D4VZsP3l7U7KkDVmXd3P2QweWEOe8Icp7uN6nx5oL0NYMIzommDPRA2ATb5H9HB7DzxnH3VgMsabUT49h84lTUxVo2kyQ1d5Jue_qGW8wiA0vnjyw5qglGFjWSzHwVphjtTI9skH-iL5qAuVYKPWBKK1Jv6YDIKLaME8ZzO4KWpynm_BMrst2f6laV4HjkWgRJgZ3xfgJ6WsS2jKcBO61_fV_Q0MrSTkDEp-lnGdZ_UCUvoC4gK0XU5QwVYjLtALxcWy6-WMdYz');"></div>
<div>
<h4 class="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Incline Dumbbell Fly</h4>
<p class="text-sm text-gray-500">3 sets x 10-12 reps</p>
</div>
</div>
<div class="flex items-center gap-4">
<span class="text-xs font-mono text-gray-600 border border-[#244732] px-2 py-1 rounded">Chest</span>
<button class="text-gray-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">expand_more</span>
</button>
</div>
</article>
<!-- Exercise Card 3 (Collapsed/Pending) -->
<article class="bg-[#112117] border border-[#244732] rounded-xl p-4 flex items-center justify-between hover:border-[#346548] transition-colors cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-lg bg-center bg-cover bg-no-repeat opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Gym equipment focused on cable machine handles" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbsWWM-rnbaCcLqUkB4hvoOwGUUm18zfG0wy2kX_AhaQvTX1gaeQo4v0p2J8mZTz2r5vUOZY_zs2i_aEvtVo7g4w5mK_HYPwjfkyU7_nQ20tzyVpyk_STBPWaScuFG-sBsZ5qZnxlAimA7djmHIVnxmoCPKiySjn1Ago2BSk3chh_zS-xDg0xE2BlmVp7Erg0uhcNiqFdaV_ZX_Je3PHABTAKnKUMV8s_3V5RVgrLXj44u4Aer0O-zYUosFTujhTrpw56_zgbC1GED');"></div>
<div>
<h4 class="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Tricep Pushdowns</h4>
<p class="text-sm text-gray-500">4 sets x 15 reps</p>
</div>
</div>
<div class="flex items-center gap-4">
<span class="text-xs font-mono text-gray-600 border border-[#244732] px-2 py-1 rounded">Triceps</span>
<button class="text-gray-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">expand_more</span>
</button>
</div>
</article>
<!-- Exercise Card 4 (Collapsed/Pending) -->
<article class="bg-[#112117] border border-[#244732] rounded-xl p-4 flex items-center justify-between hover:border-[#346548] transition-colors cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-lg bg-center bg-cover bg-no-repeat opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Close up of dumbbell weight" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWZiE-2LcsO8c_ljMOJsrjFKgMMQdBcl3NamE4d6-p8Ikn_MLpBufNN7o0lOmL4HphuTMbXVu7qu_Vk4O8DODWtFWE64WGaHsINPEnR4eseI7NKwZXo0dBLk_-VrEpiD9BK4OEcBlTsecXtlfza6zKT6Kv_MAKWu_YAyoPtz8LhgnDdLoemEe_KkiiT8ZojdO5YL04Rga487A51D26TxRTyq9TXjBymo3iQpYOu69iUIBPBD27bdfRnQXLCnuD007nlGMffC4dBovw');"></div>
<div>
<h4 class="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Lateral Raises</h4>
<p class="text-sm text-gray-500">3 sets x 15-20 reps</p>
</div>
</div>
<div class="flex items-center gap-4">
<span class="text-xs font-mono text-gray-600 border border-[#244732] px-2 py-1 rounded">Shoulders</span>
<button class="text-gray-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">expand_more</span>
</button>
</div>
</article>
</div>
</main>
<!-- Bottom Sticky Action Bar -->
<footer class="fixed bottom-0 left-0 right-0 bg-[#112117]/95 backdrop-blur-lg border-t border-[#244732] p-4 md:px-8 z-40">
<div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div class="hidden md:flex flex-col">
<span class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Current Streak</span>
<div class="flex items-center gap-1 text-[#93c8a8]">
<span class="material-symbols-outlined text-sm">local_fire_department</span>
<span class="font-bold">12 Days</span>
</div>
</div>
<div class="flex items-center gap-4 w-full md:w-auto">
<button class="hidden md:block px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    Cancel Workout
                </button>
<button class="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-[#15c55a] text-black font-bold text-lg px-8 py-3 rounded-lg shadow-[0_0_20px_rgba(25,230,107,0.3)] hover:shadow-[0_0_30px_rgba(25,230,107,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0">
<span class="material-symbols-outlined">check_circle</span>
                    Finish Session
                </button>
</div>
</div>
</footer>
<!-- Rest Timer Toast/Overlay (Simulated Active State) -->
<div class="fixed bottom-24 right-4 md:right-8 bg-[#1a3224] border border-[#346548] rounded-xl p-4 shadow-2xl flex items-center gap-4 z-50 animate-bounce cursor-pointer hover:bg-[#203d2c] transition-colors">
<div class="relative w-12 h-12 flex items-center justify-center">
<svg class="transform -rotate-90 w-12 h-12">
<circle cx="24" cy="24" fill="transparent" r="20" stroke="#244732" stroke-width="4"></circle>
<circle cx="24" cy="24" fill="transparent" r="20" stroke="#19e66b" stroke-dasharray="125.6" stroke-dashoffset="40" stroke-width="4"></circle>
</svg>
<span class="absolute text-xs font-bold text-white">45s</span>
</div>
<div>
<p class="text-xs text-gray-400 uppercase font-semibold">Resting</p>
<p class="text-white font-medium text-sm">Next: Incline Fly</p>
</div>
<button class="text-gray-400 hover:text-white ml-2">
<span class="material-symbols-outlined">skip_next</span>
</button>
</div>
</body></html>

<!-- Workout Plan Builder -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Workout Plan Builder - FitPro SaaS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112117",
                        "surface-dark": "#18181b",
                        "surface-darker": "#0f0f10",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for better aesthetics in dark mode */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #112117; 
        }
        ::-webkit-scrollbar-thumb {
            background: #334139; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4B5563; 
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden h-screen flex">
<!-- Main Side Navigation (From provided component) -->
<div class="relative hidden md:flex h-full w-72 flex-col bg-[#112218] border-r border-[#244732] shrink-0">
<div class="flex h-full flex-col justify-between p-4">
<div class="flex flex-col gap-6">
<!-- User Profile / Brand -->
<div class="flex gap-3 items-center">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-slate-700" data-alt="Profile picture of a fitness trainer" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBcPmXDAmIeu47GGg_Z9zInkg6Bi2uUO_YGJuqkF5pmSxw6HYxuJCRA12X3YZp6W3czB--AJun2jxLCxQ-OV2xOyRqO0i6KdBK8MYfmaBWDmPVvdp3ShJ1yjRujuESjAdNdnajtL8qc0NbpQqgOaGC-2zT5nYsPdU1KjufT0WjHmGtS8pPCr_UIQQYzzNNO3tKd2SVnHj6_FsUfYW77mWd_HWvb8JWZxDONpBXOBhtWZV7RzxAVpbeZb_pYDslD5Ce1NAayKPGZ3YJ");'></div>
<div class="flex flex-col">
<h1 class="text-white text-base font-medium leading-normal">FitPro SaaS</h1>
<p class="text-[#93c8a8] text-sm font-normal leading-normal">Trainer Admin</p>
</div>
</div>
<!-- Nav Links -->
<div class="flex flex-col gap-1">
<div class="flex items-center gap-3 px-3 py-2 text-[#93c8a8] hover:text-white hover:bg-[#244732] rounded-lg transition-colors cursor-pointer">
<span class="material-symbols-outlined">grid_view</span>
<p class="text-sm font-medium leading-normal">Dashboard</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#244732] text-white cursor-pointer">
<span class="material-symbols-outlined text-primary">group</span>
<p class="text-sm font-medium leading-normal">Clients</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 text-[#93c8a8] hover:text-white hover:bg-[#244732] rounded-lg transition-colors cursor-pointer">
<span class="material-symbols-outlined">fitness_center</span>
<p class="text-sm font-medium leading-normal">Exercises</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 text-[#93c8a8] hover:text-white hover:bg-[#244732] rounded-lg transition-colors cursor-pointer">
<span class="material-symbols-outlined">description</span>
<p class="text-sm font-medium leading-normal">Templates</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 text-[#93c8a8] hover:text-white hover:bg-[#244732] rounded-lg transition-colors cursor-pointer">
<span class="material-symbols-outlined">settings</span>
<p class="text-sm font-medium leading-normal">Settings</p>
</div>
</div>
</div>
<!-- Bottom Action -->
<div class="pt-4 border-t border-[#244732]">
<div class="flex items-center gap-3 px-3 py-2 text-[#93c8a8] hover:text-white hover:bg-[#244732] rounded-lg transition-colors cursor-pointer">
<span class="material-symbols-outlined">logout</span>
<p class="text-sm font-medium leading-normal">Logout</p>
</div>
</div>
</div>
</div>
<!-- Secondary Sidebar: Exercise Library -->
<div class="w-80 bg-surface-dark border-r border-[#244732] flex flex-col shrink-0 h-full">
<div class="p-4 border-b border-[#244732]">
<h2 class="text-white font-semibold mb-3">Exercise Library</h2>
<!-- Search -->
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">search</span>
<input class="w-full bg-[#244732]/50 border border-[#244732] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500" placeholder="Search exercises..." type="text"/>
</div>
<!-- Filter Chips -->
<div class="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
<button class="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full whitespace-nowrap border border-primary/30">All</button>
<button class="px-3 py-1 bg-[#244732] text-gray-300 text-xs font-medium rounded-full whitespace-nowrap hover:bg-[#2f5c40]">Chest</button>
<button class="px-3 py-1 bg-[#244732] text-gray-300 text-xs font-medium rounded-full whitespace-nowrap hover:bg-[#2f5c40]">Back</button>
<button class="px-3 py-1 bg-[#244732] text-gray-300 text-xs font-medium rounded-full whitespace-nowrap hover:bg-[#2f5c40]">Legs</button>
</div>
</div>
<!-- Draggable Exercise List -->
<div class="flex-1 overflow-y-auto p-3 space-y-2">
<!-- Item 1 -->
<div class="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#244732] cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/20 transition-all">
<div class="w-10 h-10 rounded bg-gray-700 bg-cover bg-center shrink-0" data-alt="Man doing bench press" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx-QzjmLGx7sqHh9GztfVSSCij52gPptGHwMjMdePJ1HvPe3P9rov3dcGdHQSqusHyiRAcghK91p_Wl61Ch3MUFcROVBK8C1hck3jzqCITN8jRZSLwozyzRCmtNCdJTjdpH9_ObqEDbE0BjiKs0-mHOL-SrIplrLA938ActKgJqX1VM-2q9PK_4J67PJEsRHIBEMO6Sj3dLZOsMD7HTWgHFYbILhsmOc1Y7O9mW7rzoDY1MUnL-YELnnnjUnIcHrpafCWw1mI3QvTl')"></div>
<div class="flex-1 min-w-0">
<h3 class="text-sm font-medium text-white truncate">Barbell Bench Press</h3>
<p class="text-xs text-gray-400 truncate">Chest • Compound</p>
</div>
<button class="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<!-- Item 2 -->
<div class="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#244732] cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/20 transition-all">
<div class="w-10 h-10 rounded bg-gray-700 bg-cover bg-center shrink-0" data-alt="Woman doing squats" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjDMoxAgsaE8WRniybKHeIO7ux-3JAcJQFkzS1du9fD4G4mVYasjPSuB4JkSCxvjwJWB3fw9L24cAE7dxwkyeS9FSQZJOLHpgOGxYK-UtRanhu1N6VgcaY_bzS5fvRxBJ87AaPlWXT-DUgqfBUhQhLlhX2Xp20hY2Oj93WLDndeWlSZ480MvyZRUPl7jkI9tFJGGuL2goKI9Uzj_CCCM02jVifDs382WGIEWQcPSl9_eXzt9R3_Ms_llTUOUOVYSPZi0fobCFI-nGR')"></div>
<div class="flex-1 min-w-0">
<h3 class="text-sm font-medium text-white truncate">Barbell Squat</h3>
<p class="text-xs text-gray-400 truncate">Legs • Compound</p>
</div>
<button class="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<!-- Item 3 -->
<div class="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#244732] cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/20 transition-all">
<div class="w-10 h-10 rounded bg-gray-700 bg-cover bg-center shrink-0" data-alt="Man doing pullups" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgO12omJAkiw-AnLBrhPY6_HvFUSCqCGDrf7H7jV8r1xV4e_981_gXhos0J1uPeAeo3jf2sitS_cyVYn1ikUn_8erwXuGWiB3Zz7qdx2wrGZB_DbbGabdreW-xAP952rcdYfavk7jLhXNODRscNXhODox3mn5b637ngcutuJnZMDu86UD3_7Lk9Jk91zy5B_5Mc18uOLp_vG51JAAUsmr8Qk-n2KLFk7ANiLP4xSher0EmxH3apLyitm-COoaj5V9k1TgmBoMQ51DL')"></div>
<div class="flex-1 min-w-0">
<h3 class="text-sm font-medium text-white truncate">Pull Up (Weighted)</h3>
<p class="text-xs text-gray-400 truncate">Back • Compound</p>
</div>
<button class="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<!-- Item 4 -->
<div class="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#244732] cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/20 transition-all">
<div class="w-10 h-10 rounded bg-gray-700 bg-cover bg-center shrink-0" data-alt="Dumbbell shoulder press" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhykf_qin6AEPlw3c7ISNalnJQQBhd8iHmG5VLgYLxRRooNMdMONOqaWGNgtxXP8O_Lx3S4lUUvDivHXETrSkAk6XGQjbm71cskufJqcdDfqRB5fvt76QhiR5h68s2HAR02wNKtU5z9y3CHSE9UFL5EwRYensaCdL5lBV2jEsxwbiaI60EgJ84j4gSFrVFI-IxFCTKomhE1VZU2GsAz27ljx7axUJP1un7mGSjA0TOFzwx5s_iLgRtqHQRQ7L5Oz_xyWWshZ1hRsoz')"></div>
<div class="flex-1 min-w-0">
<h3 class="text-sm font-medium text-white truncate">DB Shoulder Press</h3>
<p class="text-xs text-gray-400 truncate">Shoulders • Compound</p>
</div>
<button class="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<!-- Item 5 -->
<div class="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#244732] cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/20 transition-all">
<div class="w-10 h-10 rounded bg-gray-700 bg-cover bg-center shrink-0" data-alt="Tricep pushdowns" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlghLRWw0JqLA5gnE2F-kbJ15cd-M94SaLABat-8WCaiiOJDUyCjDD-rZpc5-KGXuDN_vqPodnL_Ro0TBkAlWsEpYxr5ivEXnMFFZTumz-px3nGeMlpe41OGd5r5zw8ZRtPSxmfQyHKkeutkEhST5lJBt0BlrmQFWK47gjs2qmsojFs0ZfPVJo0rcvqvD0bueU2wgdLn25Wv0W7jJ9R0dHf5TB0Yz2X-vKrcsSJax8DxJF5D08pTKNzXHj4v_50Gbx7_ei7vXbyRTz')"></div>
<div class="flex-1 min-w-0">
<h3 class="text-sm font-medium text-white truncate">Tricep Rope Pushdown</h3>
<p class="text-xs text-gray-400 truncate">Triceps • Isolation</p>
</div>
<button class="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
</div>
</div>
<!-- Main Builder Canvas -->
<main class="flex-1 flex flex-col h-full overflow-hidden bg-background-dark relative">
<!-- Top Bar -->
<header class="h-16 border-b border-[#244732] flex items-center justify-between px-6 bg-surface-dark shrink-0">
<div class="flex flex-col">
<div class="flex items-center gap-2 text-xs text-gray-400 mb-0.5">
<span class="hover:text-primary cursor-pointer">Clients</span>
<span class="material-symbols-outlined text-[12px]">chevron_right</span>
<span class="hover:text-primary cursor-pointer">John Doe</span>
<span class="material-symbols-outlined text-[12px]">chevron_right</span>
<span class="text-white">New Plan</span>
</div>
<h1 class="text-lg font-bold text-white tracking-tight">Hypertrophy Phase 1 - Push A</h1>
</div>
<div class="flex items-center gap-3">
<button class="px-4 py-2 rounded-lg border border-[#244732] text-sm font-medium text-gray-300 hover:bg-[#244732] hover:text-white transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">save</span>
                    Save Draft
                </button>
<button class="px-4 py-2 rounded-lg bg-primary text-background-dark text-sm font-bold hover:bg-[#15c25a] transition-colors shadow-[0_0_15px_rgba(25,230,107,0.3)] flex items-center gap-2">
<span>Assign to Client</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</header>
<!-- Builder Scroll Area -->
<div class="flex-1 overflow-y-auto p-6 md:p-8">
<div class="max-w-4xl mx-auto flex flex-col gap-6">
<!-- Plan Metadata Card -->
<div class="bg-surface-dark border border-[#244732] rounded-xl p-5">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-xs font-medium text-gray-400 mb-1.5">Plan Name</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded-lg px-3 py-2 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary" type="text" value="Hypertrophy Phase 1 - Push A"/>
</div>
<div>
<label class="block text-xs font-medium text-gray-400 mb-1.5">Description / Goal</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded-lg px-3 py-2 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary" type="text" value="Focus on chest and front delts. Keep intensity high."/>
</div>
</div>
</div>
<!-- Exercise List Container -->
<div class="flex flex-col gap-4" id="workout-list">
<!-- Exercise Card 1 -->
<div class="group bg-surface-dark border border-[#244732] rounded-xl p-4 hover:border-primary/50 transition-colors shadow-sm relative">
<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
<!-- Drag Handle -->
<div class="hidden md:flex cursor-grab text-gray-600 hover:text-gray-400 p-1">
<span class="material-symbols-outlined">drag_indicator</span>
</div>
<!-- Exercise Info -->
<div class="flex items-center gap-3 min-w-[200px]">
<div class="w-12 h-12 rounded bg-gray-800 bg-cover bg-center shrink-0" data-alt="Barbell Bench Press" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCU5eXNqnpOi1wJXOSXA4P5srBTNo0hhpcyjjvLbjPepM5AAyJaL5gTgOXGp3resgir0_SV3HIBed6SUXbHoKOtQxxogqU0XIiWV_A1MnOv67TEZmYf1zG0YPTtehvNyNqkONlJQxCOWOEnD_K1B_VdFdECr5FnWmrlpEnDOQZVWgUjhWqoIh41oqoCCGvfSLQsxSR4Zsesx0pYYH9Uu7v2314K54rGI-jecFn9Gw8vLNUwzah2WNfkjzsZMEZ79z_RCbMC6xByXSvx')"></div>
<div>
<h3 class="text-white font-semibold text-sm">Barbell Bench Press</h3>
<span class="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">Chest</span>
</div>
</div>
<!-- Inputs Grid -->
<div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
<div>
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Sets</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums" type="number" value="4"/>
</div>
<div>
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Reps</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums" type="text" value="8-10"/>
</div>
<div class="relative">
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Weight</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums pr-6" type="number" value="80"/>
<span class="absolute right-2 bottom-1.5 text-xs text-gray-500 pointer-events-none">kg</span>
</div>
<div class="relative">
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Rest</label>
<div class="flex items-center bg-[#112218] border border-[#244732] rounded px-2 py-1.5 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
<span class="material-symbols-outlined text-gray-500 text-[14px] mr-1">timer</span>
<input class="w-full bg-transparent border-none p-0 text-white text-sm text-center focus:ring-0" type="text" value="90s"/>
</div>
</div>
</div>
<!-- Actions -->
<div class="flex items-center gap-1 md:ml-4 border-l border-[#244732] pl-4 md:border-l-0 md:pl-0 pt-2 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0 w-full md:w-auto justify-end">
<button class="p-1.5 text-gray-500 hover:text-white hover:bg-[#244732] rounded transition-colors tooltip" title="Add Note">
<span class="material-symbols-outlined text-[20px]">sticky_note_2</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-white hover:bg-[#244732] rounded transition-colors" title="Duplicate">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors" title="Remove">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
<!-- Notes Area (Hidden by default, shown here for example) -->
<div class="mt-3 pt-3 border-t border-[#244732]/50 flex gap-2">
<span class="material-symbols-outlined text-yellow-500/80 text-[18px] mt-0.5">sticky_note_2</span>
<textarea class="w-full bg-transparent border-none p-0 text-gray-400 text-sm focus:ring-0 resize-none h-auto" placeholder="Add instructions for client..." rows="1">Ensure full range of motion. Touch chest to bar.</textarea>
</div>
</div>
<!-- Exercise Card 2 -->
<div class="group bg-surface-dark border border-[#244732] rounded-xl p-4 hover:border-primary/50 transition-colors shadow-sm relative">
<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
<div class="hidden md:flex cursor-grab text-gray-600 hover:text-gray-400 p-1">
<span class="material-symbols-outlined">drag_indicator</span>
</div>
<div class="flex items-center gap-3 min-w-[200px]">
<div class="w-12 h-12 rounded bg-gray-800 bg-cover bg-center shrink-0" data-alt="Dumbbell Shoulder Press" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcbEZgpgrTVDbQQ4FGQJCMze7nt7iA4EUfTeZgvmz-beyP18x5kJ3Xix6d29QCsjn-rOzFnxCCLUX33fLsADdUJnG6bcmflBstfANBy__YnKWW2v9OnmkoZsj70PJeepfl8HzBl_wFV8qzw_b0Dmi21QFRQ7CeLud06U04MEsOEBTJTl3iLEKGktR-4qBJ1tr6NM_RDG0ZfJXVu7n_C11MpO3I-WVQqt9ZwhqyI6k6iDIQ8y-A-01EuuAGFlTLquAc_UKLiyq6pYLy')"></div>
<div>
<h3 class="text-white font-semibold text-sm">DB Shoulder Press</h3>
<span class="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">Shoulders</span>
</div>
</div>
<div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
<div>
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Sets</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums" type="number" value="3"/>
</div>
<div>
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Reps</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums" type="text" value="10-12"/>
</div>
<div class="relative">
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Weight</label>
<input class="w-full bg-[#112218] border border-[#244732] rounded px-2 py-1.5 text-white text-sm text-center focus:ring-1 focus:ring-primary focus:border-primary tabular-nums pr-6" type="number" value="22"/>
<span class="absolute right-2 bottom-1.5 text-xs text-gray-500 pointer-events-none">kg</span>
</div>
<div class="relative">
<label class="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1">Rest</label>
<div class="flex items-center bg-[#112218] border border-[#244732] rounded px-2 py-1.5 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
<span class="material-symbols-outlined text-gray-500 text-[14px] mr-1">timer</span>
<input class="w-full bg-transparent border-none p-0 text-white text-sm text-center focus:ring-0" type="text" value="60s"/>
</div>
</div>
</div>
<div class="flex items-center gap-1 md:ml-4 border-l border-[#244732] pl-4 md:border-l-0 md:pl-0 pt-2 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0 w-full md:w-auto justify-end">
<button class="p-1.5 text-gray-500 hover:text-white hover:bg-[#244732] rounded transition-colors">
<span class="material-symbols-outlined text-[20px]">sticky_note_2</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-white hover:bg-[#244732] rounded transition-colors">
<span class="material-symbols-outlined text-[20px]">content_copy</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
<!-- Drop Zone / Empty State Indicator -->
<div class="border-2 border-dashed border-[#244732] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#112218]/50 hover:bg-[#112218] hover:border-primary/40 transition-all cursor-pointer group">
<div class="bg-[#244732] rounded-full p-4 mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[#93c8a8] text-[32px]">add_circle</span>
</div>
<h3 class="text-white font-medium mb-1">Add Exercise</h3>
<p class="text-gray-500 text-sm">Drag from library or click to browse</p>
</div>
</div>
</div>
</div>
<!-- Sticky Footer for Mobile / Quick Stats -->
<div class="h-14 border-t border-[#244732] bg-surface-dark shrink-0 flex items-center justify-between px-6 text-sm">
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<span class="text-gray-400">Total Sets:</span>
<span class="text-white font-semibold">7</span>
</div>
<div class="flex items-center gap-2">
<span class="text-gray-400">Est. Duration:</span>
<span class="text-white font-semibold">45 min</span>
</div>
</div>
<div class="flex items-center gap-4">
<button class="text-[#93c8a8] hover:text-white text-xs font-medium uppercase tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">delete_sweep</span>
                     Clear All
                 </button>
<button class="text-[#93c8a8] hover:text-white text-xs font-medium uppercase tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">save_as</span>
                     Save Template
                 </button>
</div>
</div>
</main>
</body></html>

<!-- Login / Access Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FitPro Connect - Login</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112117",
                        "surface-dark": "#1a3224",
                        "border-dark": "#244732",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col relative overflow-hidden">
<!-- Background Decorative Elements -->
<div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
<div class="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"></div>
<div class="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
</div>
<!-- Main Content Wrapper -->
<div class="relative z-10 flex flex-col grow items-center justify-center p-4 sm:p-8">
<!-- Navbar / Top Brand Area -->
<header class="absolute top-0 left-0 right-0 flex justify-between items-center p-6 sm:px-12">
<div class="flex items-center gap-3">
<div class="size-8 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">fitness_center</span>
</div>
<h2 class="text-white text-xl font-bold tracking-tight">FitPro Connect</h2>
</div>
<a class="hidden sm:flex text-sm text-gray-300 hover:text-white transition-colors gap-1 items-center font-medium" href="#">
                Need help? <span class="material-symbols-outlined text-lg">arrow_forward</span>
</a>
</header>
<!-- Central Login Card -->
<div class="w-full max-w-[480px] bg-[#1a2c22]/80 backdrop-blur-xl border border-border-dark shadow-2xl rounded-2xl p-8 sm:p-10 transform transition-all">
<!-- Header Section -->
<div class="mb-8 text-center">
<h1 class="text-3xl font-black tracking-tight text-white mb-2">Welcome Back</h1>
<p class="text-gray-400 text-sm">Please enter your details to sign in.</p>
</div>
<!-- Role Switcher (Tabs) -->
<div class="mb-8">
<div aria-label="User Role Selection" class="flex p-1 bg-surface-dark/50 border border-border-dark rounded-xl" role="group">
<label class="flex-1 relative cursor-pointer group">
<input checked="" class="peer sr-only" name="role" type="radio" value="Client"/>
<div class="flex items-center justify-center py-2.5 px-3 rounded-lg text-sm font-medium text-gray-400 transition-all duration-200 peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-primary/20 hover:text-gray-200">
<span class="material-symbols-outlined text-lg mr-1.5 filled">person</span>
                            Client
                        </div>
</label>
<label class="flex-1 relative cursor-pointer group">
<input class="peer sr-only" name="role" type="radio" value="Trainer"/>
<div class="flex items-center justify-center py-2.5 px-3 rounded-lg text-sm font-medium text-gray-400 transition-all duration-200 peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-primary/20 hover:text-gray-200">
<span class="material-symbols-outlined text-lg mr-1.5">exercise</span>
                            Trainer
                        </div>
</label>
<label class="flex-1 relative cursor-pointer group">
<input class="peer sr-only" name="role" type="radio" value="Gym"/>
<div class="flex items-center justify-center py-2.5 px-3 rounded-lg text-sm font-medium text-gray-400 transition-all duration-200 peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-primary/20 hover:text-gray-200">
<span class="material-symbols-outlined text-lg mr-1.5">apartment</span>
                            Gym
                        </div>
</label>
</div>
</div>
<!-- Login Form -->
<form action="#" class="space-y-5">
<!-- Email Field -->
<div class="space-y-2">
<label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1" for="email">Email Address</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">mail</span>
</div>
<input class="block w-full pl-11 pr-4 py-3.5 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center pl-1">
<label class="block text-xs font-semibold uppercase tracking-wider text-gray-400" for="password">Password</label>
<a class="text-xs font-medium text-primary hover:text-primary/80 transition-colors" href="#">Forgot password?</a>
</div>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
</div>
<input class="block w-full pl-11 pr-12 py-3.5 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm" id="password" name="password" placeholder="••••••••••••" required="" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors focus:outline-none" type="button">
<span class="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
<!-- Remember Me -->
<div class="flex items-center pl-1">
<label class="flex items-center space-x-3 cursor-pointer group">
<div class="relative flex items-center">
<input class="peer sr-only form-checkbox h-4 w-4 text-primary rounded border-gray-600 bg-surface-dark focus:ring-offset-background-dark" type="checkbox"/>
<div class="w-5 h-5 border-2 border-gray-600 rounded bg-surface-dark flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
<span class="material-symbols-outlined text-[16px] text-background-dark opacity-0 peer-checked:opacity-100 font-bold">check</span>
</div>
</div>
<span class="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">Keep me signed in</span>
</label>
</div>
<!-- Submit Button -->
<button class="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold text-background-dark bg-primary hover:bg-[#15c55b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all shadow-[0_0_20px_rgba(25,230,107,0.3)] hover:shadow-[0_0_25px_rgba(25,230,107,0.4)] mt-6" type="submit">
                    Sign in to Account
                    <span class="material-symbols-outlined ml-2 text-lg">login</span>
</button>
</form>
<!-- Footer -->
<div class="mt-8 text-center border-t border-white/5 pt-6">
<p class="text-sm text-gray-400">
                    Don't have an account? 
                    <a class="font-bold text-primary hover:text-primary/80 transition-colors" href="#">Sign up free</a>
</p>
</div>
</div>
<!-- Decorative Info Cards (Subtle - only visible on larger screens to fill space) -->
<div class="hidden lg:block absolute bottom-12 right-12 animate-fade-in-up delay-100">
<div class="flex items-center gap-4 bg-surface-dark/40 backdrop-blur-md border border-border-dark p-4 rounded-xl max-w-xs">
<div class="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<span class="material-symbols-outlined">security</span>
</div>
<div>
<h4 class="text-white text-sm font-semibold">Secure Access</h4>
<p class="text-xs text-gray-400">Enterprise-grade encryption.</p>
</div>
</div>
</div>
<div class="hidden lg:block absolute bottom-12 left-12 animate-fade-in-up delay-200">
<div class="flex items-center gap-4 bg-surface-dark/40 backdrop-blur-md border border-border-dark p-4 rounded-xl max-w-xs">
<div class="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">bolt</span>
</div>
<div>
<h4 class="text-white text-sm font-semibold">High Performance</h4>
<p class="text-xs text-gray-400">Real-time data synchronization.</p>
</div>
</div>
</div>
</div>
</body></html>

<!-- Trainer / Gym Dashboard -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FitPro Trainer Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112117",
                        "surface-dark": "#1c3326",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 font-display antialiased">
<div class="flex h-screen overflow-hidden">
<!-- Sidebar -->
<aside class="hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark lg:flex">
<div class="flex h-16 items-center px-6 border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl">fitness_center</span>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FitPro SaaS</span>
</div>
</div>
<div class="flex flex-1 flex-col justify-between px-4 py-6">
<nav class="space-y-1">
<a class="group flex items-center gap-3 rounded-lg bg-surface-dark px-3 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-white/10" href="#">
<span class="material-symbols-outlined text-primary">dashboard</span>
                        Dashboard
                    </a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
                        Clients
                    </a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">exercise</span>
                        Workout Plans
                    </a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">description</span>
                        Templates
                    </a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">calendar_month</span>
                        Calendar
                    </a>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<div class="relative">
<span class="material-symbols-outlined">chat</span>
<span class="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary ring-2 ring-white dark:ring-background-dark"></span>
</div>
                        Messages
                    </a>
</nav>
<div class="space-y-4">
<div class="px-3">
<p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-2">Settings</p>
<a class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark dark:hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
                            Settings
                        </a>
</div>
<div class="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
<div class="flex items-center gap-3 px-3">
<img alt="Trainer profile picture" class="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" data-alt="Close up portrait of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApFl0z9ZiQHX9_7f3r_CBeM8pS4ESEQdcwFTeCNFCfYefRY3lamNKEtvQhjZi1lFn3G1BhWRxi4HqiEntkodOIClrghFWoMP6_F_IyPzP9dm5lbo59Pw9bztBmItVSGMPvqEZWwLqTPXJpLZaGp4BfiBC_KlGYS6hph9BkaGLq3WwUwjyzcBOKoLrQmGkagm8IpRwFxpdGXEcVd26ffn68sCImgb1S9cWprTR-uRtkpdlw906xwfnEtOppuvmajvC24-GK0Gt4SfP1"/>
<div class="flex flex-col">
<span class="text-sm font-medium text-slate-900 dark:text-white">Alex Johnson</span>
<span class="text-xs text-slate-500 dark:text-slate-400">Head Trainer</span>
</div>
</div>
</div>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
<!-- Header -->
<header class="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark px-6">
<div class="flex items-center gap-4 lg:hidden">
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
<span class="text-lg font-bold text-slate-900 dark:text-white">FitPro</span>
</div>
<div class="hidden lg:block">
<h1 class="text-xl font-bold text-slate-900 dark:text-white">Trainer Dashboard</h1>
<p class="text-xs text-slate-500 dark:text-slate-400">Good morning, Alex. You have 3 pending check-ins.</p>
</div>
<div class="flex items-center gap-4">
<div class="relative hidden sm:block">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined text-[20px]">search</span>
</span>
<input class="h-9 w-64 rounded-full border-0 bg-slate-100 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white dark:placeholder:text-slate-500" placeholder="Search clients..." type="text"/>
</div>
<button class="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-surface-dark transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-background-dark"></span>
</button>
<button class="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-slate-900 shadow-sm hover:bg-opacity-90 transition-colors">
<span class="material-symbols-outlined mr-2 text-[20px]">add</span>
                        New Client
                    </button>
</div>
</header>
<!-- Scrollable Content -->
<div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div class="mx-auto max-w-7xl space-y-6">
<!-- Hero Banner -->
<div class="relative overflow-hidden rounded-xl bg-surface-dark min-h-[180px] shadow-lg group">
<div class="absolute inset-0 z-0">
<img alt="Background of gym weights and dumbbells" class="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" data-alt="Dark moody gym background with weights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSf6go960Uquhsw_INW1doI5F56UBZIPnn5J1FL_1-Vj3gzLQBX0PA7X_WZDWn0_LLSxzOiPb9SgObnaonknAdDhVq7bRQTZij1RPTrs1bt34bINVdhjE4fsB1SbXsJUVCrztLKq2eJjYkgTP1ocODbB_0wKQrE5jL8ChFSJruRHbc6VOjWPLaf-P2zaD98ZF4KidtkZhvTBBwEXb37WF_ZCu4IpA2Kc5VWFUaNNDZFF6O8EBYJiIlSc34kh_mr3Aju_4o7aG4FIf"/>
<div class="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
</div>
<div class="relative z-10 flex h-full flex-col justify-center p-6 sm:p-8">
<h2 class="text-3xl font-bold text-white mb-2">Your Weekly Overview</h2>
<p class="max-w-xl text-slate-300">You're on track! Client adherence is up <span class="text-primary font-semibold">12%</span> this week compared to last month. Keep pushing the momentum.</p>
<div class="mt-6 flex gap-3">
<button class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors">View Reports</button>
</div>
</div>
</div>
<!-- KPI Cards -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<!-- Card 1 -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<div class="flex items-center justify-between">
<div class="rounded-lg bg-primary/20 p-2 text-primary">
<span class="material-symbols-outlined">group</span>
</div>
<span class="flex items-center gap-1 text-sm font-medium text-green-400">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
                                    +12%
                                </span>
</div>
<div class="mt-4">
<p class="text-sm font-medium text-slate-400">Active Clients</p>
<h3 class="text-2xl font-bold text-white">42</h3>
</div>
</div>
<!-- Card 2 -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<div class="flex items-center justify-between">
<div class="rounded-lg bg-blue-500/20 p-2 text-blue-400">
<span class="material-symbols-outlined">assignment</span>
</div>
<span class="flex items-center gap-1 text-sm font-medium text-green-400">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
                                    +5%
                                </span>
</div>
<div class="mt-4">
<p class="text-sm font-medium text-slate-400">Active Plans</p>
<h3 class="text-2xl font-bold text-white">156</h3>
</div>
</div>
<!-- Card 3 -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<div class="flex items-center justify-between">
<div class="rounded-lg bg-orange-500/20 p-2 text-orange-400">
<span class="material-symbols-outlined">check_circle</span>
</div>
<span class="flex items-center gap-1 text-sm font-medium text-green-400">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
                                    +2.4%
                                </span>
</div>
<div class="mt-4">
<p class="text-sm font-medium text-slate-400">Completion Rate</p>
<h3 class="text-2xl font-bold text-white">88%</h3>
</div>
</div>
<!-- Card 4 (Mini Graph) -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5 relative overflow-hidden">
<div class="absolute right-0 top-0 h-full w-1/2 opacity-20">
<svg class="h-full w-full" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M0 80 Q 50 20 100 50 T 200 20" fill="none" stroke="#19e66b" stroke-width="4"></path>
<path d="M0 80 Q 50 20 100 50 T 200 20 V 100 H 0 Z" fill="url(#gradient)" opacity="0.5"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#19e66b"></stop>
<stop offset="100%" stop-color="#19e66b" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div class="relative z-10">
<div class="rounded-lg bg-purple-500/20 p-2 w-fit text-purple-400 mb-4">
<span class="material-symbols-outlined">payments</span>
</div>
<p class="text-sm font-medium text-slate-400">Revenue (MTD)</p>
<h3 class="text-2xl font-bold text-white">$4,250</h3>
</div>
</div>
</div>
<!-- Main Grid -->
<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
<!-- Recent Activity & Chart Area -->
<div class="lg:col-span-2 space-y-6">
<!-- Graph Section -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<div class="mb-6 flex items-center justify-between">
<div>
<h3 class="text-lg font-bold text-white">Weekly Completion Rate</h3>
<p class="text-sm text-slate-400">Client adherence over the last 7 days</p>
</div>
<select class="rounded-lg border-0 bg-background-dark py-1.5 pl-3 pr-8 text-xs text-white ring-1 ring-white/10 focus:ring-2 focus:ring-primary">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
</select>
</div>
<div class="relative h-64 w-full">
<!-- Graph SVG -->
<svg class="h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#19e66b" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#19e66b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Grid Lines -->
<line stroke="#334155" stroke-dasharray="4 4" x1="0" x2="800" y1="0" y2="0"></line>
<line stroke="#334155" stroke-dasharray="4 4" x1="0" x2="800" y1="75" y2="75"></line>
<line stroke="#334155" stroke-dasharray="4 4" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#334155" stroke-dasharray="4 4" x1="0" x2="800" y1="225" y2="225"></line>
<line stroke="#334155" stroke-dasharray="4 4" x1="0" x2="800" y1="300" y2="300"></line>
<!-- The Data Line -->
<!-- Adjusted path for a nice curve -->
<path d="M0,200 C100,200 100,100 200,120 C300,140 300,250 400,180 C500,110 500,50 600,80 C700,110 700,20 800,40" fill="none" stroke="#19e66b" stroke-width="3" vector-effect="non-scaling-stroke"></path>
<!-- Area Fill -->
<path d="M0,200 C100,200 100,100 200,120 C300,140 300,250 400,180 C500,110 500,50 600,80 C700,110 700,20 800,40 V 300 H 0 Z" fill="url(#chartGradient)" stroke="none"></path>
<!-- Data Points -->
<circle cx="200" cy="120" fill="#112117" r="4" stroke="#19e66b" stroke-width="2"></circle>
<circle cx="400" cy="180" fill="#112117" r="4" stroke="#19e66b" stroke-width="2"></circle>
<circle cx="600" cy="80" fill="#112117" r="4" stroke="#19e66b" stroke-width="2"></circle>
</svg>
<!-- X Axis Labels -->
<div class="absolute bottom-0 left-0 right-0 flex justify-between pt-2 text-xs font-medium text-slate-500">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
<!-- Recent Activity Table -->
<div class="rounded-xl bg-surface-dark shadow-sm ring-1 ring-white/5 overflow-hidden">
<div class="border-b border-white/5 px-6 py-4 flex justify-between items-center">
<h3 class="text-lg font-bold text-white">Recent Activity</h3>
<button class="text-sm text-primary hover:text-primary/80 font-medium">View All</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left text-sm">
<thead class="bg-white/5 text-slate-400">
<tr>
<th class="px-6 py-3 font-medium">Client</th>
<th class="px-6 py-3 font-medium">Activity</th>
<th class="px-6 py-3 font-medium">Plan</th>
<th class="px-6 py-3 font-medium">Time</th>
<th class="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-white/5 text-slate-300">
<tr class="hover:bg-white/5 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Client Sarah" class="h-8 w-8 rounded-full object-cover" data-alt="Portrait of a woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu8voDOXriEsxqwC2xNtPl4DIXZBnK-RzevYbqr5NNrt-lag1x-_aNd40pMpZyQ0sRm9lU9uOJSyjcr82AT6_d-MWvjri-AP7aEABxH1cRDuOrzJJy0ZSXbsYCWiWqxA2GU0aXvKEC9_tNaPjFHI-875O5_YvZdJ2L8DlS0B95hb8o1z-QphqS1eEaJFB_U2iYL9UBg-Z5UkaO9TyFF0GJ-8tgTH66L-TI4bQHahhGaUfkR6_fGmGf1xn14KDOxVCY22xrqwSngqpg"/>
<span class="font-medium text-white">Sarah M.</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Check-in Complete</span>
</td>
<td class="px-6 py-4">Hypertrophy Block A</td>
<td class="px-6 py-4 text-slate-500">2 min ago</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-white"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-white/5 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Client Mike" class="h-8 w-8 rounded-full object-cover" data-alt="Portrait of a man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzwuEpWXSxuDRfK1YetbenNHW1PG6Ydep0x_XaFTXd8qioZ8YZiVOfxBoqjsyH8YRsAUbc2B3tlvwKBwclwO0wrePq9aaEr9pokJvUhIbaTCVsi6BeDzw6IlGNN_R6h78CosBWqJ2gyo9kJISUWnWVUQtFMveZ18ZwST2cc5ino-YxgYugg65mzgZrfkyXpA00WSCd3iOnttzNQYY6Izxxq9Ywl9jGJoSMWb2DnTvhXfbS5FTwFXwSKrr2Llu8uCOP9Rq0xwtPCx-l"/>
<span class="font-medium text-white">Mike R.</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">Workout Logged</span>
</td>
<td class="px-6 py-4">Marathon Prep</td>
<td class="px-6 py-4 text-slate-500">1 hour ago</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-white"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-white/5 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Client Jessica" class="h-8 w-8 rounded-full object-cover" data-alt="Portrait of a woman smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVmYlSKi5jMzcg7KleT4cpDSeBGQHV3b6QJi3ko7pJZE0v2i7fuREDsr-debPUz5rc916AxJLt38cPWkjpSZK2BBC8LyW6fnhe2uYeEa5ZJYW35aNkOIpK5GD5wDu5memUigUcgtD8l-DUu6WLadHMYXl5GewZmabVGiqmHO49PMQt9EeckUn_m0-bwM4xM3l-AWCSnfjwtF_zPB2HgG0vlTy6HgSCATvEL-PsJf1625O3BbeyQ_-Sg_ouNeLp1AxaraNxolNj8M6C"/>
<span class="font-medium text-white">Jessica L.</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-500/20">Missed Workout</span>
</td>
<td class="px-6 py-4">Strength Phase 2</td>
<td class="px-6 py-4 text-slate-500">3 hours ago</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-white"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-white/5 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<img alt="Client David" class="h-8 w-8 rounded-full object-cover" data-alt="Portrait of a man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvpkuZ4vJ_pksxM9d8Zsn5qtLnml1rtwJk26C6XITy2eCChF8bc6Ju2tVoiBZ_l-2sZXcxQelCxeyeQ2BtjY6X-ylpOmo8AYH3d7RdgQ-N3piMo5Fumm5SwkPDLqQ-rO3FsfsUFj1jJWlb7-LJLEBmNHXSdK8ov3Hn-R7AouYOv4h3iQjCEjI5Q6KjkKqhWfiaD09nFlay5omXQi4yCPhrQWA7QjF-yPQA4Ohca_Lp3Pfhaij1pfb3xqlvFx2OK-0X9DPJhhtMljE5"/>
<span class="font-medium text-white">David K.</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Plan Completed</span>
</td>
<td class="px-6 py-4">Weight Loss 101</td>
<td class="px-6 py-4 text-slate-500">5 hours ago</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-white"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Right Sidebar / Widgets -->
<div class="space-y-6">
<!-- Quick Actions -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<h3 class="text-lg font-bold text-white mb-4">Quick Actions</h3>
<div class="grid grid-cols-2 gap-3">
<button class="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 hover:bg-white/10 transition-colors group">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_add</span>
<span class="text-xs font-medium text-slate-300">Add Client</span>
</button>
<button class="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 hover:bg-white/10 transition-colors group">
<span class="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">note_add</span>
<span class="text-xs font-medium text-slate-300">Create Plan</span>
</button>
<button class="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 hover:bg-white/10 transition-colors group">
<span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform">mail</span>
<span class="text-xs font-medium text-slate-300">Message All</span>
</button>
<button class="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 hover:bg-white/10 transition-colors group">
<span class="material-symbols-outlined text-purple-400 group-hover:scale-110 transition-transform">calendar_add_on</span>
<span class="text-xs font-medium text-slate-300">Schedule</span>
</button>
</div>
</div>
<!-- Upcoming Schedule -->
<div class="rounded-xl bg-surface-dark p-6 shadow-sm ring-1 ring-white/5">
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-white">Upcoming Sessions</h3>
<button class="text-slate-400 hover:text-white"><span class="material-symbols-outlined">more_horiz</span></button>
</div>
<div class="space-y-4">
<!-- Event 1 -->
<div class="flex gap-4 items-start">
<div class="flex flex-col items-center justify-center rounded bg-white/5 p-2 min-w-[50px]">
<span class="text-xs font-bold text-slate-400">OCT</span>
<span class="text-lg font-bold text-white">24</span>
</div>
<div>
<h4 class="text-sm font-semibold text-white">PT Session - Zoom</h4>
<p class="text-xs text-slate-400">with John Doe</p>
<span class="mt-1 inline-block text-[10px] font-medium text-primary">10:00 AM - 11:00 AM</span>
</div>
</div>
<!-- Event 2 -->
<div class="flex gap-4 items-start border-t border-white/5 pt-4">
<div class="flex flex-col items-center justify-center rounded bg-white/5 p-2 min-w-[50px]">
<span class="text-xs font-bold text-slate-400">OCT</span>
<span class="text-lg font-bold text-white">24</span>
</div>
<div>
<h4 class="text-sm font-semibold text-white">Initial Consultation</h4>
<p class="text-xs text-slate-400">with Emma W.</p>
<span class="mt-1 inline-block text-[10px] font-medium text-primary">02:30 PM - 03:00 PM</span>
</div>
</div>
<!-- Event 3 -->
<div class="flex gap-4 items-start border-t border-white/5 pt-4">
<div class="flex flex-col items-center justify-center rounded bg-white/5 p-2 min-w-[50px]">
<span class="text-xs font-bold text-slate-400">OCT</span>
<span class="text-lg font-bold text-white">25</span>
</div>
<div>
<h4 class="text-sm font-semibold text-white">Group HIIT Class</h4>
<p class="text-xs text-slate-400">Main Studio</p>
<span class="mt-1 inline-block text-[10px] font-medium text-primary">06:00 PM - 07:00 PM</span>
</div>
</div>
</div>
<button class="mt-4 w-full rounded-lg border border-white/10 bg-transparent py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                                    View Calendar
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>

<!-- Progress & Analytics Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Progress &amp; Analytics - FitPro SaaS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "primary-content": "#003816",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112117",
                        "surface-dark": "#1A2E22",
                        "surface-light": "#FFFFFF",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem", 
                        "lg": "0.5rem", 
                        "xl": "0.75rem", 
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for dark mode */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #112117; 
        }
        ::-webkit-scrollbar-thumb {
            background: #244732; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #2f5e42; 
        }
        
        /* Chart Styles - Simplified CSS representation of charts */
        .chart-grid-line {
            stroke: #244732;
            stroke-dasharray: 4;
        }
        .chart-line {
            stroke: #19e66b;
            stroke-width: 3;
            fill: none;
            stroke-linecap: round;
        }
        .chart-area {
            fill: url(#gradient-primary);
            opacity: 0.2;
        }
        .chart-bar {
            fill: #19e66b;
            rx: 4;
        }
        .chart-bar-bg {
            fill: #244732;
            rx: 4;
        }
        .chart-dot {
            fill: #112117;
            stroke: #19e66b;
            stroke-width: 2;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden">
<div class="flex h-screen w-full overflow-hidden">
<!-- Side Navigation -->
<aside class="hidden w-64 flex-col bg-[#112218] border-r border-[#244732] lg:flex flex-shrink-0">
<div class="flex h-full flex-col justify-between p-4">
<div class="flex flex-col gap-6">
<!-- User Profile -->
<div class="flex gap-3 items-center pb-4 border-b border-[#244732]">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-lg ring-2 ring-[#19e66b]/20" data-alt="Profile picture of a fitness trainer" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqUCg2DxGuHY5XkTixD0Cg3PIjFkGc00grrWscZOpiNms0WJEr7jlG6QkG848X3g9E53T38AA0GubFdIzsL-lYRolCJLgPG5d9NEWiSlo9LneO4ZZTjL_wzGVe3sdzehmxcMAd94kMFhVFA7j68CD7G0LqtRso5bwql_v4h91v9YVO-y1fnpOgIyLGrjhU16IuLMKqNG7KkxP_gPQymuu8-7re-h-5tajucPsLMrUosL6CoN2UyHV2VOlx2lHc8U3FwaUU-bc9kNti");'></div>
<div class="flex flex-col">
<h1 class="text-white text-base font-bold leading-tight">Sarah Jenkins</h1>
<p class="text-[#93c8a8] text-xs font-medium uppercase tracking-wider">Pro Trainer</p>
</div>
</div>
<!-- Nav Links -->
<nav class="flex flex-col gap-2">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-[#244732] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-[#244732] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">group</span>
<span class="text-sm font-medium">Clients</span>
</a>
<!-- Active State -->
<div class="flex flex-col gap-1">
<div class="px-3 text-xs font-semibold text-[#93c8a8] uppercase tracking-wider mt-4 mb-2">Analytics</div>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#19e66b]/10 text-[#19e66b] ring-1 ring-[#19e66b]/20" href="#">
<span class="material-symbols-outlined fill-current">monitoring</span>
<span class="text-sm font-bold">Progress &amp; Stats</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-[#244732] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">fitness_center</span>
<span class="text-sm font-medium">Workouts</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-[#244732] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">restaurant</span>
<span class="text-sm font-medium">Nutrition</span>
</a>
</div>
</nav>
</div>
<!-- Bottom Links -->
<div class="flex flex-col gap-2 pt-4 border-t border-[#244732]">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-[#244732] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:text-red-300">logout</span>
<span class="text-sm font-medium">Log Out</span>
</a>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col h-full overflow-hidden relative">
<!-- Header -->
<header class="h-16 border-b border-[#244732] bg-[#112117]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
<div class="flex items-center gap-4">
<button class="lg:hidden p-2 text-white hover:bg-[#244732] rounded-lg">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="flex flex-col">
<h2 class="text-lg font-bold text-white tracking-tight">Analytics Dashboard</h2>
<div class="flex items-center gap-2 text-xs text-[#93c8a8]">
<span>Client:</span>
<div class="flex items-center gap-1 cursor-pointer hover:text-white">
<span class="font-semibold text-white">Michael Foster</span>
<span class="material-symbols-outlined text-[16px]">expand_more</span>
</div>
</div>
</div>
</div>
<div class="flex items-center gap-4">
<!-- Time Range Filter -->
<div class="hidden sm:flex bg-[#1A2E22] p-1 rounded-lg border border-[#244732]">
<button class="px-3 py-1.5 text-xs font-medium text-[#93c8a8] hover:text-white rounded-md hover:bg-[#244732] transition-colors">Week</button>
<button class="px-3 py-1.5 text-xs font-bold text-[#112117] bg-[#19e66b] rounded-md shadow-sm">Month</button>
<button class="px-3 py-1.5 text-xs font-medium text-[#93c8a8] hover:text-white rounded-md hover:bg-[#244732] transition-colors">Year</button>
<button class="px-3 py-1.5 text-xs font-medium text-[#93c8a8] hover:text-white rounded-md hover:bg-[#244732] transition-colors">Custom</button>
</div>
<button class="flex items-center justify-center size-9 rounded-full bg-[#1A2E22] border border-[#244732] text-white hover:bg-[#244732] transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-[#19e66b] text-[#112117] text-sm font-bold hover:bg-[#15c55b] transition-colors">
<span class="material-symbols-outlined text-[18px]">download</span>
<span>Export</span>
</button>
</div>
</header>
<!-- Scrollable Content -->
<div class="flex-1 overflow-y-auto p-6 scroll-smooth">
<div class="max-w-[1400px] mx-auto flex flex-col gap-6">
<!-- KPI Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Card 1 -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-5 shadow-sm hover:border-[#19e66b]/30 transition-colors group">
<div class="flex justify-between items-start mb-2">
<div class="p-2 rounded-lg bg-[#244732] text-[#19e66b] group-hover:bg-[#19e66b] group-hover:text-[#112117] transition-colors">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<span class="flex items-center text-xs font-bold text-[#19e66b] bg-[#19e66b]/10 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-1">trending_up</span> +12%
                                </span>
</div>
<h3 class="text-[#93c8a8] text-sm font-medium">Total Volume</h3>
<p class="text-2xl font-black text-white mt-1">45,200 <span class="text-sm text-[#93c8a8] font-medium">lbs</span></p>
<p class="text-xs text-[#93c8a8]/70 mt-2">vs. previous 30 days</p>
</div>
<!-- Card 2 -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-5 shadow-sm hover:border-[#19e66b]/30 transition-colors group">
<div class="flex justify-between items-start mb-2">
<div class="p-2 rounded-lg bg-[#244732] text-[#19e66b] group-hover:bg-[#19e66b] group-hover:text-[#112117] transition-colors">
<span class="material-symbols-outlined">check_circle</span>
</div>
<span class="flex items-center text-xs font-bold text-[#19e66b] bg-[#19e66b]/10 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-1">trending_up</span> +5%
                                </span>
</div>
<h3 class="text-[#93c8a8] text-sm font-medium">Consistency</h3>
<p class="text-2xl font-black text-white mt-1">92% <span class="text-sm text-[#93c8a8] font-medium">attendance</span></p>
<p class="text-xs text-[#93c8a8]/70 mt-2">12 of 13 sessions completed</p>
</div>
<!-- Card 3 -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-5 shadow-sm hover:border-[#19e66b]/30 transition-colors group">
<div class="flex justify-between items-start mb-2">
<div class="p-2 rounded-lg bg-[#244732] text-[#19e66b] group-hover:bg-[#19e66b] group-hover:text-[#112117] transition-colors">
<span class="material-symbols-outlined">monitor_weight</span>
</div>
<span class="flex items-center text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-1">trending_down</span> -1.2lbs
                                </span>
</div>
<h3 class="text-[#93c8a8] text-sm font-medium">Avg Body Weight</h3>
<p class="text-2xl font-black text-white mt-1">184.6 <span class="text-sm text-[#93c8a8] font-medium">lbs</span></p>
<p class="text-xs text-[#93c8a8]/70 mt-2">Target: 180 lbs</p>
</div>
<!-- Card 4 -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-5 shadow-sm hover:border-[#19e66b]/30 transition-colors group">
<div class="flex justify-between items-start mb-2">
<div class="p-2 rounded-lg bg-[#244732] text-[#19e66b] group-hover:bg-[#19e66b] group-hover:text-[#112117] transition-colors">
<span class="material-symbols-outlined">timer</span>
</div>
<span class="flex items-center text-xs font-bold text-gray-400 bg-gray-400/10 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-1">remove</span> 0%
                                </span>
</div>
<h3 class="text-[#93c8a8] text-sm font-medium">Avg Duration</h3>
<p class="text-2xl font-black text-white mt-1">58 <span class="text-sm text-[#93c8a8] font-medium">min</span></p>
<p class="text-xs text-[#93c8a8]/70 mt-2">Per session average</p>
</div>
</div>
<!-- Main Chart Row -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Volume Chart (Wide) -->
<div class="lg:col-span-2 bg-[#1A2E22] border border-[#244732] rounded-xl p-6 shadow-sm flex flex-col h-[400px]">
<div class="flex justify-between items-center mb-6">
<div>
<h3 class="text-lg font-bold text-white">Volume Over Time</h3>
<p class="text-sm text-[#93c8a8]">Total load lifted per session (lbs)</p>
</div>
<button class="p-2 hover:bg-[#244732] rounded-lg text-[#93c8a8] transition-colors">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<!-- SVG Chart Container -->
<div class="flex-1 w-full relative">
<svg class="overflow-visible" height="100%" preserveaspectratio="none" viewbox="0 0 800 300" width="100%">
<defs>
<lineargradient id="gradient-primary" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#19e66b" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#19e66b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Grid Lines -->
<line class="chart-grid-line" opacity="0.1" x1="0" x2="800" y1="0" y2="0"></line>
<line class="chart-grid-line" opacity="0.1" x1="0" x2="800" y1="75" y2="75"></line>
<line class="chart-grid-line" opacity="0.1" x1="0" x2="800" y1="150" y2="150"></line>
<line class="chart-grid-line" opacity="0.1" x1="0" x2="800" y1="225" y2="225"></line>
<line class="chart-grid-line" opacity="0.1" x1="0" x2="800" y1="300" y2="300"></line>
<!-- Chart Area -->
<path class="chart-area" d="M0,220 C100,200 150,250 250,150 S400,100 500,120 S650,50 800,20 L800,300 L0,300 Z"></path>
<!-- Chart Line -->
<path class="chart-line shadow-[0_0_15px_rgba(25,230,107,0.5)]" d="M0,220 C100,200 150,250 250,150 S400,100 500,120 S650,50 800,20"></path>
<!-- Data Point (Hover Effect Simulation) -->
<g transform="translate(500, 120)">
<circle class="chart-dot" r="6"></circle>
<rect fill="#112117" height="30" rx="4" stroke="#244732" width="80" x="-40" y="-45"></rect>
<text fill="#fff" font-size="12" font-weight="bold" text-anchor="middle" x="0" y="-26">12,400 lbs</text>
</g>
</svg>
<!-- X Axis Labels -->
<div class="absolute bottom-[-24px] left-0 w-full flex justify-between text-xs text-[#93c8a8] font-medium">
<span>Mon 12</span>
<span>Wed 14</span>
<span>Fri 16</span>
<span>Mon 19</span>
<span>Wed 21</span>
<span>Fri 23</span>
<span>Today</span>
</div>
</div>
</div>
<!-- Consistency Chart (Narrow) -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-6 shadow-sm flex flex-col h-[400px]">
<div class="flex justify-between items-center mb-6">
<div>
<h3 class="text-lg font-bold text-white">Session Consistency</h3>
<p class="text-sm text-[#93c8a8]">Sessions per week</p>
</div>
</div>
<div class="flex-1 w-full flex items-end justify-between gap-2 pb-6 relative">
<!-- Bars -->
<div class="flex flex-col items-center gap-2 w-full">
<div class="w-full bg-[#244732] rounded-t-sm h-[200px] relative overflow-hidden group">
<div class="absolute bottom-0 w-full bg-[#19e66b] h-[60%] group-hover:bg-[#4ffda0] transition-colors rounded-t-sm"></div>
<div class="opacity-0 group-hover:opacity-100 absolute top-2 left-1/2 -translate-x-1/2 bg-[#112117] text-white text-[10px] py-0.5 px-1.5 rounded border border-[#244732] transition-opacity">3</div>
</div>
<span class="text-xs text-[#93c8a8] font-medium">W1</span>
</div>
<div class="flex flex-col items-center gap-2 w-full">
<div class="w-full bg-[#244732] rounded-t-sm h-[200px] relative overflow-hidden group">
<div class="absolute bottom-0 w-full bg-[#19e66b] h-[80%] group-hover:bg-[#4ffda0] transition-colors rounded-t-sm"></div>
<div class="opacity-0 group-hover:opacity-100 absolute top-2 left-1/2 -translate-x-1/2 bg-[#112117] text-white text-[10px] py-0.5 px-1.5 rounded border border-[#244732] transition-opacity">4</div>
</div>
<span class="text-xs text-[#93c8a8] font-medium">W2</span>
</div>
<div class="flex flex-col items-center gap-2 w-full">
<div class="w-full bg-[#244732] rounded-t-sm h-[200px] relative overflow-hidden group">
<div class="absolute bottom-0 w-full bg-[#19e66b] h-[40%] group-hover:bg-[#4ffda0] transition-colors rounded-t-sm"></div>
<div class="opacity-0 group-hover:opacity-100 absolute top-2 left-1/2 -translate-x-1/2 bg-[#112117] text-white text-[10px] py-0.5 px-1.5 rounded border border-[#244732] transition-opacity">2</div>
</div>
<span class="text-xs text-[#93c8a8] font-medium">W3</span>
</div>
<div class="flex flex-col items-center gap-2 w-full">
<div class="w-full bg-[#244732] rounded-t-sm h-[200px] relative overflow-hidden group">
<div class="absolute bottom-0 w-full bg-[#19e66b] h-[100%] group-hover:bg-[#4ffda0] transition-colors rounded-t-sm"></div>
<div class="opacity-0 group-hover:opacity-100 absolute top-2 left-1/2 -translate-x-1/2 bg-[#112117] text-white text-[10px] py-0.5 px-1.5 rounded border border-[#244732] transition-opacity">5</div>
</div>
<span class="text-xs text-[#93c8a8] font-medium">W4</span>
</div>
</div>
<div class="bg-[#244732]/30 p-3 rounded-lg flex items-center gap-3">
<span class="material-symbols-outlined text-[#19e66b]">info</span>
<p class="text-xs text-[#93c8a8]">Client is <span class="text-white font-bold">1 session ahead</span> of target this month.</p>
</div>
</div>
</div>
<!-- Bottom Section Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
<!-- Body Weight Progression -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-6 shadow-sm">
<div class="flex justify-between items-center mb-6">
<div>
<h3 class="text-lg font-bold text-white">Body Weight</h3>
<p class="text-sm text-[#93c8a8]">Weekly weigh-ins</p>
</div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-[#19e66b] bg-[#19e66b]/10 px-2 py-1 rounded">Target: 180 lbs</span>
</div>
</div>
<div class="w-full h-[200px] relative">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 400 200" width="100%">
<!-- Dashed Grid -->
<line stroke="#244732" stroke-dasharray="4" stroke-width="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#244732" stroke-dasharray="4" stroke-width="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#244732" stroke-dasharray="4" stroke-width="1" x1="0" x2="400" y1="150" y2="150"></line>
<!-- Weight Line -->
<polyline fill="none" points="20,40 80,60 140,80 200,90 260,110 320,130 380,140" stroke="#FFFFFF" stroke-opacity="0.8" stroke-width="2"></polyline>
<!-- Trend Line -->
<polyline fill="none" points="20,40 380,150" stroke="#19e66b" stroke-dasharray="5,5" stroke-width="2"></polyline>
<!-- Dots -->
<circle cx="20" cy="40" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="80" cy="60" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="140" cy="80" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="200" cy="90" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="260" cy="110" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="320" cy="130" fill="#112117" r="4" stroke="#FFFFFF" stroke-width="2"></circle>
<circle cx="380" cy="140" fill="#19e66b" r="4" stroke="#19e66b" stroke-width="2"></circle>
</svg>
</div>
<div class="flex justify-between text-xs text-[#93c8a8] mt-2 px-2">
<span>Sep 1</span>
<span>Sep 15</span>
<span>Oct 1</span>
<span>Oct 15</span>
</div>
</div>
<!-- Recent Achievements/Milestones -->
<div class="bg-[#1A2E22] border border-[#244732] rounded-xl p-6 shadow-sm flex flex-col">
<h3 class="text-lg font-bold text-white mb-4">Recent Milestones</h3>
<div class="flex flex-col gap-3 overflow-y-auto max-h-[220px] pr-2 custom-scrollbar">
<div class="flex items-center gap-4 p-3 rounded-lg bg-[#244732]/20 hover:bg-[#244732]/40 transition-colors border border-transparent hover:border-[#244732]">
<div class="size-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
<span class="material-symbols-outlined">emoji_events</span>
</div>
<div class="flex-1">
<h4 class="text-white text-sm font-bold">New PR: Deadlift</h4>
<p class="text-xs text-[#93c8a8]">315 lbs x 1 rep</p>
</div>
<span class="text-xs text-[#93c8a8]/60">2d ago</span>
</div>
<div class="flex items-center gap-4 p-3 rounded-lg bg-[#244732]/20 hover:bg-[#244732]/40 transition-colors border border-transparent hover:border-[#244732]">
<div class="size-10 rounded-full bg-[#19e66b]/20 flex items-center justify-center text-[#19e66b]">
<span class="material-symbols-outlined">local_fire_department</span>
</div>
<div class="flex-1">
<h4 class="text-white text-sm font-bold">10 Day Streak</h4>
<p class="text-xs text-[#93c8a8]">Consistency is key!</p>
</div>
<span class="text-xs text-[#93c8a8]/60">5d ago</span>
</div>
<div class="flex items-center gap-4 p-3 rounded-lg bg-[#244732]/20 hover:bg-[#244732]/40 transition-colors border border-transparent hover:border-[#244732]">
<div class="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined">scale</span>
</div>
<div class="flex-1">
<h4 class="text-white text-sm font-bold">Goal Reached: Weight</h4>
<p class="text-xs text-[#93c8a8]">Hit 185 lbs milestone</p>
</div>
<span class="text-xs text-[#93c8a8]/60">1w ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<script>
        // No JS logic here as per instructions, just purely layout
    </script>
</body></html>

<!-- Client Management Page -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FitPro Trainer - Client Management</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "primary-hover": "#14b856",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112218",
                        "surface-dark": "#1a3224",
                        "surface-dark-lighter": "#244732",
                        "text-secondary": "#93c8a8",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                    },
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #112218; 
        }
        ::-webkit-scrollbar-thumb {
            background: #244732; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #346548; 
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex flex-col">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-[#244732] bg-[#112218]/95 backdrop-blur-sm px-6 py-3">
<div class="mx-auto flex max-w-[1280px] items-center justify-between">
<div class="flex items-center gap-4 text-white">
<div class="flex h-8 w-8 items-center justify-center rounded bg-primary text-[#112218]">
<span class="material-symbols-outlined text-2xl font-bold">fitness_center</span>
</div>
<h1 class="text-xl font-bold tracking-tight text-white">FitPro Trainer</h1>
</div>
<nav class="hidden md:flex flex-1 justify-center gap-8">
<a class="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Dashboard</a>
<a class="text-white text-sm font-bold transition-colors border-b-2 border-primary pb-0.5" href="#">Clients</a>
<a class="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Workouts</a>
<a class="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Nutrition</a>
<a class="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Finances</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex items-center justify-center text-white/70 hover:text-white relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
</button>
<div class="h-8 w-8 rounded-full bg-cover bg-center border border-[#244732]" data-alt="User profile picture" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpxhkc3pT96jztKvJ5yg-pE574a5C3NUh4f2NCEvsEtvZb6h5-l97sJyFmNfFdj-lPIuvHt9AMcG0Rkb8rmjqFdVUZVE96mhgPqsbTqKh8CfEf-DHFI8kverLkr7oZfrgAHD0r3nHrzYTTcgrH5aF4sxkl__nJrpEaS0m8DAFOxWMNxzMG8Av3fuW1niK7ATnLk1q9V-6aStsF2Inlz4KhzAjIRzYaKrx8XcBcvProd3YVqKfONdeTKeJnORYu40yoOxaq6vqGN0Ym')"></div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full flex justify-center py-8 px-4 md:px-8">
<div class="w-full max-w-[1280px] flex flex-col gap-8">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="flex flex-col gap-2">
<h2 class="text-4xl font-black tracking-tight text-white">Client Management</h2>
<p class="text-text-secondary text-base max-w-2xl">Manage your roster, track individual progress, and update training plans efficiently.</p>
</div>
<button class="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover transition-colors text-[#112218] px-6 py-2.5 text-sm font-bold shadow-[0_0_15px_rgba(25,230,107,0.3)]">
<span class="material-symbols-outlined text-[20px]">add</span>
<span>Add New Client</span>
</button>
</div>
<!-- Controls Toolbar -->
<div class="flex flex-col lg:flex-row gap-4 justify-between bg-surface-dark p-4 rounded-xl border border-[#244732]">
<!-- Search -->
<div class="relative flex-1 min-w-[280px] max-w-lg group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="block w-full rounded-lg border-none bg-surface-dark-lighter py-2.5 pl-10 pr-3 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="Search by client name, email..." type="text"/>
</div>
<!-- Filters & Views -->
<div class="flex flex-wrap items-center gap-3">
<div class="flex items-center gap-2 bg-surface-dark-lighter rounded-lg p-1 border border-[#244732]">
<button class="px-3 py-1.5 rounded bg-[#112218] text-white text-xs font-medium shadow-sm transition-all">All Clients</button>
<button class="px-3 py-1.5 rounded hover:bg-[#112218]/50 text-text-secondary hover:text-white text-xs font-medium transition-all">Active</button>
<button class="px-3 py-1.5 rounded hover:bg-[#112218]/50 text-text-secondary hover:text-white text-xs font-medium transition-all">Inactive</button>
</div>
<div class="h-6 w-px bg-[#346548] mx-1 hidden sm:block"></div>
<select class="bg-surface-dark-lighter text-white text-sm rounded-lg border-none focus:ring-2 focus:ring-primary/50 py-2.5 pl-3 pr-8 cursor-pointer">
<option>Sort by: Last Active</option>
<option>Sort by: Name (A-Z)</option>
<option>Sort by: Plan Type</option>
</select>
</div>
</div>
<!-- Data Table -->
<div class="w-full overflow-hidden rounded-xl border border-[#244732] bg-surface-dark shadow-xl">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-[#15291d] border-b border-[#244732]">
<th class="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary w-64">Client Name</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary w-32">Status</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary w-40">Last Session</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">Current Plan</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary text-right w-48">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-[#244732]">
<!-- Row 1 -->
<tr class="group hover:bg-surface-dark-lighter/50 transition-colors">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Portrait of Sarah Jenkins" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFcRIn7BRSK7VX9pePuexmMFLfdfObT8Dfv2xm7ADeA8REh6XAIQEduahBRclbH9vGKA8TgGxOQ0edI6bF2U9TEW8L37_OZunnvbcjKEh4A1bp1jhFKbmqkjjImkLN9eS9UWLhRVTkmu5LrHW-RKjdFSAj8EK0IOXACI7UW7W0XL0ZmZKjpgshPW6Ig5p_C3_7LNXTa39qLuf2iSZ3OEWg1wc2McdIVOPo7S_HTmeofRm0sKizBABLL232n22VJfyiFPEJ7R1AwELa')"></div>
<div>
<p class="font-medium text-white">Sarah Jenkins</p>
<p class="text-xs text-text-secondary">sarah.j@example.com</p>
</div>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
<span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                                        Active
                                    </span>
</td>
<td class="p-4">
<div class="flex items-center gap-2 text-sm text-gray-300">
<span class="material-symbols-outlined text-text-secondary text-[18px]">calendar_today</span>
                                        Oct 24, 2023
                                    </div>
</td>
<td class="p-4">
<div class="flex flex-col">
<span class="text-sm font-medium text-white">Hypertrophy Phase 2</span>
<div class="mt-1.5 h-1.5 w-24 rounded-full bg-[#112218]">
<div class="h-1.5 rounded-full bg-primary" style="width: 65%"></div>
</div>
</div>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Edit Plan">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="View Progress">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Message">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="group hover:bg-surface-dark-lighter/50 transition-colors">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Portrait of Michael Chen" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW34O6ggAHw1cnVGOUx76oWSvXLgU81S2S9WBgethwTaioc_u1SvGFBUr_a-Bc5H3kh1mQQRA8T930gj724UFRpn9CTzFITgdLEZm8xhdFKf5q0m3KP2ciX_X0dlIgau-Lsg5qqTzdH0kZinvLE25da57gRxhFYteiTmoEuFhvcKhSskYVU2ZDyXX4ycPLO0klJ0mRYRYbo1VpvIYkF0KfnF1s907N9V-gqz1Jk0OdEsdD4LDgWJkh9T0DynOTjVM_OErz9F39IOLg')"></div>
<div>
<p class="font-medium text-white">Michael Chen</p>
<p class="text-xs text-text-secondary">mike.c@fitmail.com</p>
</div>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                        Active
                                    </span>
</td>
<td class="p-4">
<div class="flex items-center gap-2 text-sm text-gray-300">
<span class="material-symbols-outlined text-text-secondary text-[18px]">calendar_today</span>
                                        Oct 23, 2023
                                    </div>
</td>
<td class="p-4">
<div class="flex flex-col">
<span class="text-sm font-medium text-white">Endurance Basics</span>
<div class="mt-1.5 h-1.5 w-24 rounded-full bg-[#112218]">
<div class="h-1.5 rounded-full bg-primary" style="width: 30%"></div>
</div>
</div>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Edit Plan">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="View Progress">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Message">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="group hover:bg-surface-dark-lighter/50 transition-colors">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-transparent group-hover:ring-primary/20 transition-all" data-alt="Portrait of Emily Davis" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTZwX9CaQN1JUH1YfVJDASbY2ivdRO_RN6X_HZM2M17Z1pIW87QzCHmFArkdc6Ajvnu7Z5CISk0CtSdzCFzN3XJz7hBm8ltxqv1vIz9Lg8vx156rb3vosduGBlMvBzjfOdO1mcJjMe5pI0aiKJ2cEmPsmp_I3UM9kPdU9TKSBspAb_yqQJnNevA1551rZ1aJYu0oh86mapbep7ijq1GOldMh1s1Z6BWe811TPY9hcyr4sDU0ZlD45EzfRG6Moy_w0DoQKl-Vkn-WwN')"></div>
<div>
<p class="font-medium text-white">Emily Davis</p>
<p class="text-xs text-text-secondary">emily.d@gym.net</p>
</div>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-gray-500/10 px-2.5 py-1 text-xs font-medium text-gray-400 border border-gray-500/20">
<span class="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                                        Inactive
                                    </span>
</td>
<td class="p-4">
<div class="flex items-center gap-2 text-sm text-gray-500">
<span class="material-symbols-outlined text-gray-600 text-[18px]">event_busy</span>
                                        Sep 12, 2023
                                    </div>
</td>
<td class="p-4">
<div class="flex flex-col">
<span class="text-sm font-medium text-gray-400">Post-Rehab</span>
<div class="mt-1.5 h-1.5 w-24 rounded-full bg-[#112218]">
<div class="h-1.5 rounded-full bg-gray-600" style="width: 100%"></div>
</div>
</div>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Edit Plan">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="View Progress">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Message">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
</div>
</td>
</tr>
<!-- Row 4 -->
<tr class="group hover:bg-surface-dark-lighter/50 transition-colors">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Portrait of Alex Johnson" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNvSgn3nK8zEuutxIlIXpO0EnORoUDUkxRCKH2YgbQ8CDw_wUh5TK_VzHtOninCs2q3wil5sT7vg5jsRelch7GIKkMas9ZkuKcjh3ZQvWMhNXcxxUNzyXgUs6q6GPBuVWbPrY_ZzluBiixvWH0EMMWKigAdksuW5AJpfIsHMVclCmyPvp-6RUe9VLv20zYbLhR7crS8p7p6n1xkKxJJgmuPajxIj_ARnFv4uJMxXUDONB5RRew8pmp3EtCcsOh2drwxl2bvbe1iudi')"></div>
<div>
<p class="font-medium text-white">Alex Johnson</p>
<p class="text-xs text-text-secondary">alex.j@lift.com</p>
</div>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                        Active
                                    </span>
</td>
<td class="p-4">
<div class="flex items-center gap-2 text-sm text-gray-300">
<span class="material-symbols-outlined text-text-secondary text-[18px]">calendar_today</span>
                                        Oct 25, 2023
                                    </div>
</td>
<td class="p-4">
<div class="flex flex-col">
<span class="text-sm font-medium text-white">Strength &amp; Power</span>
<div class="mt-1.5 h-1.5 w-24 rounded-full bg-[#112218]">
<div class="h-1.5 rounded-full bg-primary" style="width: 85%"></div>
</div>
</div>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Edit Plan">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="View Progress">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Message">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
</div>
</td>
</tr>
<!-- Row 5 -->
<tr class="group hover:bg-surface-dark-lighter/50 transition-colors">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/20" data-alt="Portrait of Jessica Lee" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiUfJ-kHjquBA9P8uedeVSyCdwCzhh0M8iKC-n7nhNJ1PM5mNR3hda88z4jbbOth8Fg6C4I6kHXO0FgCZrIgfeC1CyUvuoO_0NMkg9UESPuX52biu7v93GqQ1seVdMR365A2yjoMZCyH_wxUXFiFLJN8APE875HyK-I4tzUD65ZNB5nKT_l21r8HP_vUzjXQTvEwQOd59yASbWtvOyNfpUG56kfZZCOm__aFO4IoDwgmlTIaTZC4YZwtYByPv0iE0F97dTQ1xlmD2U')"></div>
<div>
<p class="font-medium text-white">Jessica Lee</p>
<p class="text-xs text-text-secondary">jess.lee@run.net</p>
</div>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                        Active
                                    </span>
</td>
<td class="p-4">
<div class="flex items-center gap-2 text-sm text-gray-300">
<span class="material-symbols-outlined text-text-secondary text-[18px]">calendar_today</span>
                                        Oct 20, 2023
                                    </div>
</td>
<td class="p-4">
<div class="flex flex-col">
<span class="text-sm font-medium text-white">Mudding Prep</span>
<div class="mt-1.5 h-1.5 w-24 rounded-full bg-[#112218]">
<div class="h-1.5 rounded-full bg-primary" style="width: 45%"></div>
</div>
</div>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Edit Plan">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="View Progress">
<span class="material-symbols-outlined text-[20px]">monitoring</span>
</button>
<button class="p-2 rounded-lg hover:bg-primary/20 hover:text-primary text-text-secondary transition-colors" title="Message">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-[#244732] px-4 py-3 sm:px-6">
<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
<div>
<p class="text-sm text-text-secondary">
                                Showing <span class="font-medium text-white">1</span> to <span class="font-medium text-white">5</span> of <span class="font-medium text-white">24</span> clients
                            </p>
</div>
<div>
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#244732] hover:bg-surface-dark-lighter focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Previous</span>
<span class="material-symbols-outlined text-sm">chevron_left</span>
</a>
<a aria-current="page" class="relative z-10 inline-flex items-center bg-primary/20 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-[#244732] hover:bg-surface-dark-lighter focus:z-20 focus:outline-offset-0" href="#">2</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-[#244732] hover:bg-surface-dark-lighter focus:z-20 focus:outline-offset-0" href="#">3</a>
<a class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#244732] hover:bg-surface-dark-lighter focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Next</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
<!-- Empty State / Illustration Area (Hidden when data is present but included for completeness) -->
<!-- <div class="hidden flex flex-col items-center justify-center py-20 bg-surface-dark rounded-xl border border-[#244732] border-dashed">
                 <div class="h-40 w-40 rounded-full bg-surface-dark-lighter flex items-center justify-center mb-6">
                    <span class="material-symbols-outlined text-6xl text-text-secondary opacity-50">search_off</span>
                 </div>
                 <h3 class="text-xl font-bold text-white mb-2">No clients found</h3>
                 <p class="text-text-secondary text-center max-w-sm mb-6">We couldn't find any clients matching your search. Try adjusting your filters or search terms.</p>
                 <button class="text-primary font-medium hover:underline">Clear all filters</button>
            </div> -->
</div>
</main>
</body></html>

<!-- Branding & Gamification Settings -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FitPro Admin - Branding &amp; Gamification</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e66b",
                        "background-light": "#f6f8f7",
                        "background-dark": "#112218", // Matching the sidebar bg
                        "card-dark": "#1a2e23", // Slightly lighter for cards
                        "input-dark": "#0e1c14", // Darker for inputs
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden">
<div class="relative flex h-screen w-full overflow-hidden">
<!-- Sidebar (Adapted from provided code) -->
<div class="flex-none w-[280px] border-r border-[#244732] flex flex-col justify-between bg-[#112218] h-full overflow-y-auto hidden md:flex">
<div class="flex flex-col gap-4 p-4">
<div class="flex gap-3 px-2 py-4">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="FitPro Admin User Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3Vu2Z5ZrfN-RK0h9c12cpX4QLMFOp2c8n1x9xp1XOu40pQvbp7vK-3wqXBeauV0vbwZC9FzO892LTVgPQaDzWQsmAAOZ6No297K3hEjH5glpJjqBGZQh4_gfRQTYR15FtlTQqkS0EkhrmcfRLJA_CnF9X_xVNhsFGfgjcC9Wpql31npw4M9hBkAo1f0ub2Vegxi2VHT1S3GV7doriIBqHLDPRjzaSzbeL_v-nz6jB0SPq4ZC42n1Sru477t8MzkcV5_89oZCtYZTF");'></div>
<div class="flex flex-col justify-center">
<h1 class="text-white text-base font-medium leading-normal">FitPro Admin</h1>
<p class="text-[#93c8a8] text-xs font-normal leading-normal">Pro Plan</p>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#244732] cursor-pointer transition-colors group">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">dashboard</span>
<p class="text-[#93c8a8] group-hover:text-white text-sm font-medium leading-normal">Dashboard</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#244732] cursor-pointer transition-colors group">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">group</span>
<p class="text-[#93c8a8] group-hover:text-white text-sm font-medium leading-normal">Clients</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#244732] cursor-pointer transition-colors group">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">fitness_center</span>
<p class="text-[#93c8a8] group-hover:text-white text-sm font-medium leading-normal">Workouts</p>
</div>
<!-- Active State for Settings -->
<div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#244732]">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">settings</span>
<p class="text-white text-sm font-medium leading-normal">Settings</p>
</div>
<div class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#244732] cursor-pointer transition-colors group">
<span class="material-symbols-outlined text-[#93c8a8] group-hover:text-white">support</span>
<p class="text-[#93c8a8] group-hover:text-white text-sm font-medium leading-normal">Support</p>
</div>
</div>
</div>
<div class="p-4">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
<span class="truncate">Upgrade Plan</span>
</button>
</div>
</div>
<!-- Main Content Area -->
<div class="flex flex-colflex-1 w-full h-full overflow-hidden flex flex-col relative bg-[#0e1c14]"> <!-- Deepest background -->
<!-- Header -->
<header class="flex-none flex items-center justify-between whitespace-nowrap border-b border-[#244732] bg-[#112218] px-6 py-3 lg:px-10">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-white">
<div class="size-8 rounded bg-gradient-to-br from-primary to-[#112218] flex items-center justify-center">
<span class="material-symbols-outlined text-[#112218]">bolt</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">FitPro SaaS</h2>
</div>
<!-- Search -->
<label class="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full">
<div class="text-[#93c8a8] flex border-none bg-[#244732] items-center justify-center pl-4 rounded-l-lg border-r-0">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#244732] focus:border-none h-full placeholder:text-[#93c8a8] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search clients..." value=""/>
</div>
</label>
</div>
<div class="flex items-center gap-4">
<button class="relative p-2 text-[#93c8a8] hover:text-white transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#244732]" data-alt="User profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzBybltWusSKPaB2hzyUTQKmEtAFtmsUT6liPgFPRJ9NwROZb_wpk5dnvEJtn2vDI7VFfCGCGqKEyaT4HPBQc_WJ-O3etz773GEHm0ZSkLmqHDYN8euwmcn8WJpiVUMV2YhKHmlIgJqxLMpbaQZQyqpo6MR0pVdtW3d2F_8mRmdeAt8uYihI3j3fnQwmpnMLXOdf26GKCF4CXPWUWjIkvHkDLDqNRWN1pxCpHVRNJwe_XUBl-d5Ci24JoQFTmkAsQSH-ehdiPBGYH3");'></div>
</div>
</header>
<!-- Scrollable Content -->
<main class="flex-1 overflow-y-auto p-6 lg:p-10 relative">
<div class="max-w-5xl mx-auto space-y-8 pb-20">
<!-- Breadcrumbs & Title -->
<div class="flex flex-col gap-2">
<div class="flex flex-wrap items-center gap-2 text-sm">
<a class="text-[#93c8a8] hover:text-primary transition-colors" href="#">Home</a>
<span class="text-[#557361]">/</span>
<a class="text-[#93c8a8] hover:text-primary transition-colors" href="#">Settings</a>
<span class="text-[#557361]">/</span>
<span class="text-white font-medium">Branding</span>
</div>
<div class="flex flex-col gap-1 mt-2">
<h1 class="text-white text-3xl font-bold tracking-tight">Branding &amp; Gamification</h1>
<p class="text-[#93c8a8] text-base">Manage your gym's visual identity and configure client engagement features.</p>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Branding Settings -->
<div class="lg:col-span-2 space-y-6">
<!-- Branding Card -->
<div class="bg-[#1a2e23] border border-[#244732] rounded-xl p-6 shadow-sm">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-primary">palette</span>
<h2 class="text-xl font-semibold text-white">Gym Identity</h2>
</div>
<div class="space-y-6">
<!-- Logo Upload -->
<div>
<label class="block text-sm font-medium text-white mb-2">Gym Logo</label>
<div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#244732] border-dashed rounded-lg hover:border-primary/50 transition-colors cursor-pointer group bg-[#112218]">
<div class="space-y-2 text-center">
<div class="mx-auto h-12 w-12 text-[#93c8a8] group-hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[48px]">cloud_upload</span>
</div>
<div class="flex text-sm text-[#93c8a8] justify-center">
<label class="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none" for="file-upload">
<span>Upload a file</span>
<input class="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p class="pl-1">or drag and drop</p>
</div>
<p class="text-xs text-[#557361]">PNG, JPG, SVG up to 5MB</p>
</div>
</div>
</div>
<!-- Brand Color -->
<div>
<label class="block text-sm font-medium text-white mb-3">Primary Brand Color</label>
<div class="flex flex-wrap gap-4">
<!-- Selected Option -->
<button class="relative group">
<div class="w-12 h-12 rounded-full bg-[#19e66b] ring-2 ring-offset-2 ring-offset-[#1a2e23] ring-[#19e66b] flex items-center justify-center">
<span class="material-symbols-outlined text-[#112218] text-xl">check</span>
</div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-100 transition-opacity">Neon</span>
</button>
<!-- Options -->
<button class="relative group">
<div class="w-12 h-12 rounded-full bg-blue-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#1a2e23] hover:ring-blue-500 transition-all"></div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#93c8a8] opacity-0 group-hover:opacity-100 transition-opacity">Blue</span>
</button>
<button class="relative group">
<div class="w-12 h-12 rounded-full bg-purple-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#1a2e23] hover:ring-purple-500 transition-all"></div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#93c8a8] opacity-0 group-hover:opacity-100 transition-opacity">Purple</span>
</button>
<button class="relative group">
<div class="w-12 h-12 rounded-full bg-orange-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#1a2e23] hover:ring-orange-500 transition-all"></div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#93c8a8] opacity-0 group-hover:opacity-100 transition-opacity">Orange</span>
</button>
<!-- Color Picker -->
<button class="relative group">
<div class="w-12 h-12 rounded-full bg-[#244732] border border-[#557361] flex items-center justify-center hover:bg-[#2f5c40] transition-colors">
<span class="material-symbols-outlined text-white">add</span>
</div>
<span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#93c8a8] opacity-0 group-hover:opacity-100 transition-opacity">Custom</span>
</button>
</div>
</div>
</div>
</div>
<!-- Gamification Card -->
<div class="bg-[#1a2e23] border border-[#244732] rounded-xl p-6 shadow-sm">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-primary">stadia_controller</span>
<h2 class="text-xl font-semibold text-white">Gamification</h2>
</div>
<p class="text-[#93c8a8] text-sm mb-6">Enable features to boost client retention and engagement through rewards.</p>
<div class="space-y-0 divide-y divide-[#244732]">
<!-- Toggle 1: Badges -->
<div class="flex items-center justify-between py-4">
<div class="flex gap-4">
<div class="p-2 bg-[#112218] rounded-lg h-fit text-[#FFD700]">
<span class="material-symbols-outlined">military_tech</span>
</div>
<div>
<h3 class="text-white font-medium">Achievement Badges</h3>
<p class="text-[#93c8a8] text-sm mt-1">Award clients automatically for hitting workout milestones.</p>
</div>
</div>
<!-- Switch Component -->
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-[#244732] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<!-- Toggle 2: Streaks -->
<div class="flex items-center justify-between py-4">
<div class="flex gap-4">
<div class="p-2 bg-[#112218] rounded-lg h-fit text-[#FF4500]">
<span class="material-symbols-outlined">local_fire_department</span>
</div>
<div>
<h3 class="text-white font-medium">Workout Streaks</h3>
<p class="text-[#93c8a8] text-sm mt-1">Track consecutive days of activity to encourage consistency.</p>
</div>
</div>
<!-- Switch Component -->
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-[#244732] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<!-- Toggle 3: Levels -->
<div class="flex items-center justify-between py-4">
<div class="flex gap-4">
<div class="p-2 bg-[#112218] rounded-lg h-fit text-[#1E90FF]">
<span class="material-symbols-outlined">trending_up</span>
</div>
<div>
<h3 class="text-white font-medium">Level System</h3>
<p class="text-[#93c8a8] text-sm mt-1">XP-based progression system. Clients earn XP for logged workouts.</p>
</div>
</div>
<!-- Switch Component -->
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-[#244732] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
<!-- Right Column: Preview -->
<div class="lg:col-span-1">
<div class="sticky top-6">
<h3 class="text-white font-medium mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">smartphone</span>
                                Mobile Preview
                            </h3>
<!-- Mobile Mockup Frame -->
<div class="relative mx-auto border-[#244732] bg-[#0e1c14] border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
<div class="h-[32px] w-[3px] bg-[#244732] absolute -left-[10px] top-[72px] rounded-l-lg"></div>
<div class="h-[46px] w-[3px] bg-[#244732] absolute -left-[10px] top-[124px] rounded-l-lg"></div>
<div class="h-[46px] w-[3px] bg-[#244732] absolute -left-[10px] top-[178px] rounded-l-lg"></div>
<div class="h-[64px] w-[3px] bg-[#244732] absolute -right-[10px] top-[142px] rounded-r-lg"></div>
<!-- Mockup Screen Content -->
<div class="rounded-[2rem] overflow-hidden w-full h-full bg-[#112218] relative flex flex-col">
<!-- StatusBar -->
<div class="h-6 w-full flex items-center justify-between px-6 pt-2">
<span class="text-[10px] text-white font-medium">9:41</span>
<div class="flex gap-1">
<span class="h-2 w-2 rounded-full bg-white"></span>
<span class="h-2 w-2 rounded-full bg-white"></span>
</div>
</div>
<!-- App Content -->
<div class="p-4 flex flex-col gap-4 mt-2">
<!-- Logo Placeholder in App -->
<div class="flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-full bg-[#244732] border border-primary/30 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm">fitness_center</span>
</div>
<span class="text-white text-sm font-bold">FitPro</span>
</div>
<div class="w-8 h-8 rounded-full bg-[#244732] bg-cover bg-center" data-alt="Client avatar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoFkokKlGWMNE7ThlCr7EovDGxSHj5QhrAKkL3-AMnNbpduVDQugClQMcIjqL7sMvkHJTzEF1mpYfk9wKMyisJ7888IwqitvhlbNNxrqrWc5DunMiHprAhK3S0-SYn-a6PBxC_JL-IEJH-jjxUKC8a9ySC7FtCmu-8l5swmoy8xTkAkkKzL3hHQ7diwBDWY5w2LRoUAMzp6ElHifZ4vlezmnG7pse9mzzgArYkZQYOw7spVG8l9R9DA0afotSyG6qJfqj70rGRNonQ');"></div>
</div>
<!-- Dynamic Header -->
<div class="mt-2">
<h2 class="text-white text-xl font-bold">Good Morning, Sarah!</h2>
<p class="text-[#93c8a8] text-xs">Ready to crush your goals today?</p>
</div>
<!-- Gamification Preview Widget -->
<div class="bg-[#1a2e23] p-3 rounded-xl border border-[#244732]">
<div class="flex justify-between items-center mb-2">
<span class="text-white text-xs font-semibold">Weekly Streak</span>
<span class="text-primary text-xs font-bold">🔥 4 Days</span>
</div>
<div class="flex gap-1">
<div class="h-1 flex-1 rounded-full bg-primary"></div>
<div class="h-1 flex-1 rounded-full bg-primary"></div>
<div class="h-1 flex-1 rounded-full bg-primary"></div>
<div class="h-1 flex-1 rounded-full bg-primary"></div>
<div class="h-1 flex-1 rounded-full bg-[#244732]"></div>
<div class="h-1 flex-1 rounded-full bg-[#244732]"></div>
<div class="h-1 flex-1 rounded-full bg-[#244732]"></div>
</div>
</div>
<!-- Badge Preview -->
<div class="flex gap-2 overflow-x-hidden">
<div class="min-w-[80px] h-24 bg-gradient-to-b from-[#1a2e23] to-[#112218] rounded-xl flex flex-col items-center justify-center border border-[#244732]">
<span class="material-symbols-outlined text-[#FFD700] text-2xl mb-1">military_tech</span>
<span class="text-[10px] text-white">Starter</span>
</div>
<div class="min-w-[80px] h-24 bg-gradient-to-b from-[#1a2e23] to-[#112218] rounded-xl flex flex-col items-center justify-center border border-[#244732]">
<span class="material-symbols-outlined text-white/20 text-2xl mb-1">bolt</span>
<span class="text-[10px] text-white/50">Speed</span>
</div>
</div>
<!-- Sample Workout -->
<div class="bg-primary p-4 rounded-xl mt-2 relative overflow-hidden">
<div class="relative z-10">
<p class="text-[#112218] text-xs font-bold mb-1">TODAY'S WORKOUT</p>
<h3 class="text-[#112218] font-bold text-lg">Full Body HIIT</h3>
<div class="flex gap-2 mt-2">
<span class="bg-[#112218]/20 px-2 py-0.5 rounded text-[10px] font-medium text-[#112218]">30 min</span>
<span class="bg-[#112218]/20 px-2 py-0.5 rounded text-[10px] font-medium text-[#112218]">Intense</span>
</div>
</div>
<div class="absolute right-[-10px] bottom-[-10px] opacity-20 text-[#112218]">
<span class="material-symbols-outlined text-[80px]">timer</span>
</div>
</div>
</div>
<!-- Bottom Nav Mock -->
<div class="mt-auto bg-[#0e1c14] h-12 flex items-center justify-around px-2 border-t border-[#244732]">
<span class="material-symbols-outlined text-primary text-xl">home</span>
<span class="material-symbols-outlined text-[#557361] text-xl">calendar_month</span>
<span class="material-symbols-outlined text-[#557361] text-xl">chat_bubble</span>
<span class="material-symbols-outlined text-[#557361] text-xl">person</span>
</div>
</div>
</div>
<p class="text-center text-[#557361] text-xs mt-4">Live preview of client mobile app</p>
</div>
</div>
</div>
</div>
</main>
<!-- Fixed Action Bar -->
<div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 flex gap-4 bg-[#1a2e23] border border-[#244732] p-2 rounded-xl shadow-2xl z-50">
<button class="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent hover:bg-[#244732] text-white text-sm font-medium transition-colors">
<span class="truncate">Discard</span>
</button>
<button class="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-opacity-90 text-[#112218] text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 transition-all">
<span class="truncate">Save Changes</span>
</button>
</div>
</div>
</div>
</body></html>



riesci a crearmi questa pagine generate da Google Stitch per poi creare tutte le varie funzioni che servono? Ovviamente prima ricreami le pagine e poi ti dico cosa e come implementare le funzioni

*Listed directory [WRKOUT-APP](file:///c:/Users/Utente/Desktop/WRKOUT-APP) *

*Edited relevant file*

*Edited relevant file*

### User Input

This is a system-generated message that is sent due to the user's review policy. Proceed with the decision that you think is the most optimal here.

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

Continue

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Viewed [index.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/index.html) *

*Viewed [trainer-dashboard.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/trainer-dashboard.html) *

*Viewed [workout-builder.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/workout-builder.html) *

*Viewed [login.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/login.html) *

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

Continue

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

Ora analizza tutte le pagine e sostituisci ogni riferimento a FitPro, FitPro Connect o simili con il nome "WRKOUT" che sarà il nome definitivo del servizio ma mantinei lo stile delle scritte già presenti

*Edited relevant file*

*Grep searched codebase*

*Grep searched codebase*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

ora anlizza la pagina login.html e fammi un elenco di tutte le possibile funzioni da poter implementare in quella pagina in modo da iniziare a creare il servizio vero e proprio. Una volta che mi fara l'elenco delle funzionalità ti dirò se va bene così o se bisogna aggiungere o eliminare alcune fuznionalità e poi ti darò il via per procedere con la creazione di quanto serve

*Viewed [login.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/login.html) *

### Planner Response

Based on the analysis of your [login.html](cci:7://file:///C:/Users/Utente/Desktop/WRKOUT-APP/login.html:0:0-0:0) page, here is a list of potential functionalities we can implement to turn it into a real, working service.

Please review this list and let me know **which ones you want to include, modify, or remove**. Once you give the green light, I will proceed with the implementation.

### 1. Core Authentication & Logic
*   **Real Backend Integration**: Connect the form to an authentication service (e.g., Supabase, Firebase, or a custom API) to actually verify credentials instead of just redirecting.
*   **Role-Based Redirection**: Implement logic to redirect users to the correct dashboard based on their role:
    *   *Client* $\rightarrow$ [index.html](cci:7://file:///C:/Users/Utente/Desktop/WRKOUT-APP/index.html:0:0-0:0)
    *   *Trainer* $\rightarrow$ [trainer-dashboard.html](cci:7://file:///C:/Users/Utente/Desktop/WRKOUT-APP/trainer-dashboard.html:0:0-0:0)
    *   *Gym* $\rightarrow$ (To be defined/created)
*   **Error Handling**: specific error messages for "User not found", "Wrong password", or "Server error" (currently not visually handled).

### 2. User Interface & Experience
*   **Password Visibility Toggle**: Make the "eye" icon functional to show/hide the password text.
*   **Form Validation**: Add immediate feedback (e.g., red borders, text hints) if the email is invalid or the password is empty *before* submitting.
*   **Loading State**: Show a spinner or disable the button while the login request is processing to prevent double-clicks.

### 3. Session Management
*   **"Remember Me"**: Implement logic (using LocalStorage or Cookies) to keep the user logged in even after closing the browser if this box is checked.
*   **Auth Guard**: a script that runs on *other* pages to check if a user is logged in, and redirects them back to [login.html](cci:7://file:///C:/Users/Utente/Desktop/WRKOUT-APP/login.html:0:0-0:0) if they aren't.

### 4. Expansion Features (New Pages Needed)
*   **"Forgot Password?" Flow**: Create a mechanism (modal or new page) to send a password reset email.
*   **Registration**: Make the "Sign up free" link functional by creating a `register.html` page.

### 5. Optional / Advanced
*   **Social Login**: Add buttons for "Sign in with Google" or "Sign in with Apple".
*   **Theme Persistence**: Ensure the app remembers if the user prefers Dark or Light mode upon logging in.

**How would you like to proceed?** (e.g., "Implement everything," "Skip social login and registration for now," etc.)

### User Input

implementa tutto e crea anche l'intero backend in modo tale che ci sia un database da poter usare per salvare tutte le informazioni dei vari utenti che si registrano. Se necessario modifica le varie pagine in vista della futura pubblicazione online tenendo conto che utilizzerò Cloudflare Pages per pubblicare il servizio. Se servono informazioni, strumenti, instllare qualcosa o fare degli account su determinati servizi, avvisami prima in modo da non andare in errore.

*Edited relevant file*

*Edited relevant file*

### User Input

This is a system-generated message that is sent due to the user's review policy. Proceed with the decision that you think is the most optimal here.

*User accepted the command `mkdir js`*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

dovrei avere inserito i dati giusti, controlla, testa traite browser e dammi la conferma per favore. Puoi utilizzare a mia email personale "rosano_francesco@hotmail.it" per testare così verifico se mi arriva effettivamente l'email

*Edited relevant file*

### User Input

Continue

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

Success. No rows returned

mi dice questo una volta fatto RUN su Supabase e se lo faccio una seconda volta invece mi esce questo:

Error: Failed to run sql query: ERROR: 42P07: relation "profiles" already exists


In più ho cliccato sul link di conferma nella email che mi è arrivata ma mi rimanda a questo link e mi da errore:

https://buxybbaafxwqloepegsh.supabase.co/auth/v1/verify?token=f2033ee2eb366550ac7e8fb2e0cf97b345b32c03c373b1222cfa331e&type=signup&redirect_to=http://localhost:3000 

http://localhost:3000/#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired&sb=

*Edited relevant file*

### User Input

che dati hai usato per la registrazione? Così provo direttamente a fare il login

### User Input

ok il login sembra funzionare ma ho notato che nella schermata di login c'è "Forgot password?" che se cliccato non fa nulle e in alto a destra c'è "Need help?" che anche non fa nulla se cliccato

*Edited relevant file*

*Edited relevant file*

### User Input

This is a system-generated message that is sent due to the user's review policy. Proceed with the decision that you think is the most optimal here.

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

ok adesso funziona. Ho notato però che il login è diviso tra Client, Trainer e Gym ma a prescindere da quale selezioni il login funziona con le stesse credenziale rinviando alla stessa identica dashboard. In più su register.html si può registrare solo Client e Trainer mentre bisognerebbe menttere anche Gym e fare in modo che ci siano 3 tipologie di account diversi sul database in modo che ogni login funzioni solo con la tipologia di account selezionata e indirizzi ad una sdashboard personalizzata per tipo di account e dati utente

*Edited relevant file*

*Edited relevant file*

### User Input

This is a system-generated message that is sent due to the user's review policy. Proceed with the decision that you think is the most optimal here.

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

devo modificare qualcosa su Supabase per dirgli di includere la tipologia di account all'interno del database?

*Viewed [db_schema.sql](file:///C:/Users/Utente/Desktop/WRKOUT-APP/db_schema.sql) *

### Planner Response

**Ottima domanda!**

Se hai già eseguito il file [db_schema.sql](cci:7://file:///C:/Users/Utente/Desktop/WRKOUT-APP/db_schema.sql:0:0-0:0) che ti ho mandato prima, **non devi modificare nulla**: il database è già pronto per accettare "Client", "Trainer" e "Gym".

Quando un nuovo utente si registra, il sistema salva automaticamente il suo ruolo.

### Come testare la Dashboard "Gym" ora?
Dato che il tuo attuale utente (`rosano_francesco@hotmail.it`) è registrato come **Trainer** (o Client, a seconda del test), se provi a fare il login selezionando "Gym" riceverai giustamente un errore.

Se vuoi trasformare il tuo attuale utente in un utente **Gym** per testare subito la nuova dashboard senza creare una nuova email, puoi eseguire questo piccolo comando SQL su Supabase (SQL Editor):

```sql
-- Cambia il ruolo del tuo utente in 'gym' per testare
update auth.users set raw_user_meta_data = '{"role": "gym", "full_name": "Francesco Rosano"}' where email = 'rosano_francesco@hotmail.it';

-- Aggiorna anche la tabella pubblica
update public.profiles set role = 'gym' where email = 'rosano_francesco@hotmail.it';
```

Dopo aver eseguito questo, potrai loggarti selezionando il tab **Gym**.

Fammi sapere se vuoi che implementi altre pagine o funzionalità!